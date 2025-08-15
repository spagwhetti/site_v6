function loadScript(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = callback;
    document.head.appendChild(s);
}

loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js', function() {
    loadScript('https://static.tumblr.com/lspzyz3/xloqk6cgp/jquery.style-my-tooltips.js', function() {
        (function($){
            $(document).ready(function(){
                $("[title]").style_my_tooltips({
                    tip_follows_cursor: true,
                    tip_delay_time:0,
                    tip_fade_speed:50, 
                    attribute:"title"
                });
            });
        })(jQuery);
    });
});