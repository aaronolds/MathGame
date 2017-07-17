$(function(){
        $('#container-fluid a').on('click', function(event) {
            alert($(this).attr('href'));
            return false;
        });
});