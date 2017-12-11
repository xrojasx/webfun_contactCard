$(document).ready(function(){
    $('form').on('submit',function(e) {
        e.preventDefault();
        $('#cards').append("<div class='newcontact'><h2>"+$("#fn").val()+" "+$("#ln").val() +"</h2><p> Click for more details</p><p hidden>"+$('#com').val()+"</p></div>");
        $('form').trigger('reset');
        });
        $(document).on('click', '.newcontact', function(){
            $(this).children ('p').toggle();
        })
    });
