define(['d3', 'lodash'], function (d3, _) {

    function PathRoadMap(elementId) {
        var self = this;
        var nodesData = [], linksData = [], width, height;
        var linkedByIndex = {};
        this.elementId = elementId;

        function isConnected(a, b) {
            return linkedByIndex[a.id + "-" + b.id]
                || linkedByIndex[b.id + "-" + a.id]
                || a.id == b.id;
        }

        this.initCanvas = function () {

            //var zoom = d3.behavior.zoom()
            //    .scaleExtent([1, 10])
            //    .on("zoom", zoomed);
            //
            //function zoomed() {
            //    self.container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            //}


            self.dragger = d3.behavior.drag()
                .origin(function(d) { return d; })
                .on("dragstart", dragstart)
                .on("drag", dragmove)
                .on("dragend", dragend);

            function dragstart(d, i) {
                self.force.stop(); // stops the force auto positioning before you start dragging
            }

            function dragmove(d, i) {
                d.px += d3.event.dx;
                d.py += d3.event.dy;
                d.x += d3.event.dx;
                d.y += d3.event.dy;
                tick(); // this is the key to make it work together with updating both px,py,x,y on d !
            }

            function dragend(d, i) {
                d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
                tick();
                self.force.resume();
            }

            var el = $('#' + elementId);
            width = el.width();
            height = el.height();

            //Add d3 module network
            self.force = d3.layout.force()
                .charge(-width)
                //.gravity(0)
                .size([width, height])
                .on("tick", tick);

            self.svg = d3.select('#' + elementId)
                .append("svg");

            self.svg.append("svg:defs").selectAll("marker")
                .data(["end"])      // Different link/path types can be defined here
                .enter().append("svg:marker")    // This section adds in the arrows
                .attr("id", String)
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 22)
                .attr("refY", -1.1)
                .attr("markerWidth", 6)
                .attr("markerHeight", 6)
                .attr("orient", "auto")
                .append("svg:path")
                .attr("d", "M0,-5L10,0L0,5");

            self.svg.append("rect")
                .attr("width", '100%')
                .attr("height", '100%')
                .style("fill", "none")
                .style("pointer-events", "all");

            self.container = self.svg.append("g");

            self.link = self.container.selectAll(".link");

            self.node = self.container.selectAll(".node");

            self.fade = function(opacity) {
                // when over one node ,opacity all the none connect one
                return function(d) {

                    self.node.style("stroke-opacity", function(o) {
                        var thisOpacity = isConnected(d, o) ? 1 : opacity;
                        d3.select(this).style('fill-opacity', thisOpacity);
                        return thisOpacity;
                    });

                    self.link.selectAll('text').style("fill", function(o) {
                        var color = '#efefef';
                        if(opacity > 0.5){
                            color = '#000';
                        }
                        return o.source === d || o.target === d ? '#000' : color;
                    });

                    self.link.selectAll('path').style("stroke-opacity", function(o) {
                        return o.source === d || o.target === d ? 1 : opacity;
                    });
                };
            };
        };

        function tick() {
            //self.link.attr("x1", function(d) { return d.source.x; })
            //    .attr("y1", function(d) { return d.source.y; })
            //    .attr("x2", function(d) { return d.target.x; })
            //    .attr("y2", function(d) { return d.target.y; });

            self.link.selectAll('path').attr("d", function(d) {
                var dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y,
                    dr = Math.sqrt(dx * dx + dy * dy)*2;
                return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
            });
            self.link.selectAll('text').attr("transform", function(d) {
                return "translate(" + (d.target.x - (d.target.x - d.source.x)/3) + "," + (d.source.y + (d.target.y - d.source.y)/3) + ")";
            });
            self.node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
        }

        this.initData = function (data) {
            nodesData.splice(0, nodesData.length);
            linksData.splice(0, linksData.length);

            _.forEach(data, function (d) {
                //used to calculate the x axis
                nodesData.push(d);
            });

            _.forEach(nodesData, function (n) {
                _.forEach(n.relations, function(link){
                    var target = _.find(nodesData, { id: link.withWho });
                    if(_.find(nodesData, { id: link.withWho })){
                        linksData.push({ source: n, target: target, text: link.text, id: n.id + '-' + target.id});
                    }
                });
            });

            _.forEach(linksData, function(d) {
                //calculate link distance
                linkedByIndex[d.id] = 1;
            });
        };

        this.drawLayout = function () {

            $('#' + elementId).show();

            self.force
                .nodes(nodesData)
                .links(linksData)
                .linkDistance(300)
                .start();

            self.node = self.node
                .data(nodesData, function (d) {
                    return d.index;
                });

            self.node.exit().remove();

            var nodeEnter = self.node.enter().append("svg:g")
                .attr("class", "node")
                .attr("data-id", function(d){
                    return d.id;
                })
                .call(self.dragger);

            nodeEnter.append('text')
                .attr('transform', "translate(" + -20 + "," + 50 + ")")
                .text(function (d) {
                    return d.name;
                });

            nodeEnter.append("circle")
                .attr('fill', '#f60')
                .attr('r', '15')
                .attr('transform', "translate(" + 0 + "," + 0 + ")");

            nodeEnter
                .on("mouseover", self.fade(.1))
                .on("mouseout", self.fade(1))
                .on("click", function(data){
                    if(self.listener){
                        self.listener.handler(self.elementId, data);
                    }
                });

            // d3 behivor
            self.link = self.link
                .data(linksData, function (d) {
                    return d.target.id + '-' + d.source.id;
                });

            self.link.exit().remove();

            var linkEnter = self.link.enter().insert("g");

            linkEnter.insert("path", ".node")
                .attr('class', 'link')
                .attr("marker-end", "url(#end)")
                .attr('data-id', function(l){
                    return l.id;
                });

            linkEnter.insert("text")
                .attr('class', 'text')
                .text(function (d) {
                    return d.text;
                });
        };

        this.on = function(listener) {
            this.listener = listener;
        };
    }

    return PathRoadMap;
});
