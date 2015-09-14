require(['PathRoadMap'], function(PathRoadMap){

    var map = new PathRoadMap('relationship');

    $.ajaxSetup({
        dataFilter: function (data) {
            try {
                var json = $.parseJSON(data);
                return data;
            } catch(e){
                alert("Data Error! <br /><br />" + e + '<br />');
            }
        }
    });

    function renderPage(){
        map.initCanvas(true);
        $.get('/get_relations').done(function(data){
            map.initData(data);
            map.drawLayout();
        });
    }

    function onclick(){
        map.releaseNode();
        map.drawLayout();
    }

    renderPage();

    $('body')
        .on('click', 'button', onclick);
});