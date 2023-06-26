$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[nam=ListItem]').val();
        $('ol').append('<li>' + toAdd + '</li>');
    });

    $("input=ListItem").keyup(function(event){
        if(event.keyCode == 13){
            $("#button").click();
        }
    });
    $(document).on('dbclick','li',function(){
        $(this).toggleClass('strike').fadeOut('slow');
    });

    $('input').focus(function(){
        $(this).val('');
    });
    $('ol').sortable();
})