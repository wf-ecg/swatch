/*jslint es5:true, white:false */
/*globals $, console, jQuery */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// programmable double click prompt
(function ($) {

    $.fn.customic = function (opt) {
        opt = opt || {};

        this.each(function () {
            var me = $(this), color;

            color = me.css('background-color');
            me.bind('dblclick.customic', function () {
                var neo = prompt('Color value', color);

                if (neo) {
                    color = neo;
                } else {
                    color = me.css('background-color');
                }
                me.css('background-color', color);
                me.text(color);
            });
        });
    };

}(jQuery));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
