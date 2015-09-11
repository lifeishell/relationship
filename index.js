require(['PathRoadMap', 'data'], function(PathRoadMap, data){

    var map = new PathRoadMap('relationship');

    function renderPage(){

        map.initCanvas();
        map.initData(data);
        map.drawLayout();
    }

    renderPage();
});