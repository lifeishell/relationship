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

    function addPerson(){
        var form = $('form[name=person]');
        form.show();
        form
            .on('submit', function(){
                if(!$('#name').val()){
                    alert('请填写名字！！');
                    return false;
                }

                $.post('/add_person/', { name: $('#name').val() }).done(function(response){
                    if(response != 'success'){
                        alert('重复啦！！！');
                        return false;
                    } else {
                        form.hide();
                        map.destory();
                        renderPage();
                        return false;
                    }
                });
                return false;
            });
    }

    $('body')
        .on('click', '[data-js=release]', onclick)
        .on('click', '[data-js=add_person]', addPerson);

    $('form[name=relation]')
        .on('submit', function(){
            var form = $('form[name=relation]');
            if(!$('#description').val()){
                alert('请添加关系！!');
                return false;
            }

            $.post('/add_relation/', form.serialize()).done(function(response){
                if(response != 'success'){
                    alert('重复啦！！！');
                    return false;
                } else {
                    form.hide();
                    map.destory();
                    renderPage();
                    return false;
                }
            });
            return false;
        });
});