 $(function(){
        $.get('templates/nav.html',function(template){
            $('#header').append(template);
            $('.menu ul li a').on('click',function(template){
				var name = $(this).attr('name');
				//var type = '.html';
                $.get(name+'.html',function(template){
                    $('#heading').empty().append(template);
                });
            });
          
        });
    });