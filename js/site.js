jQuery(document).ready(function($) {
    $('#snapz').submit(function(event) {
        $name = $("input:first").val();
        if ($name == '') {
            $(this).addClass('error').append('Throw a username in there.');
            return false;
        }
        $src = 'https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=' + $name + '&type=SVG'
        $('iframe').attr('src', $src).after('<div>Displaying the snapcode for <code>'+ $name +'<code><br/><a href="'+$src+'" target="_blank">Open in a new tab (and save)</a></div>').addClass('has-content');
        event.preventDefault();
    });
});