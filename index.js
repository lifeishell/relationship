require(['PathRoadMap', 'data'], function(PathRoadMap, data){

    var map = new PathRoadMap('relationship');

    function renderPage(){
        map.initCanvas(true);
        map.initData(data);
        map.drawLayout();
    }

    function onclick(){
        map.releaseNode();
        map.drawLayout();
    }

    renderPage();

    $('body')
        .on('click', 'button', onclick);
});