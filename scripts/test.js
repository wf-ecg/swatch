(function ($) {
    var neoz = 1000;

    $.fn.drags = function (opt) {
        var $el;

        opt = $.extend({
            handle: '',
            cursor: 'move',
        }, opt);

        if (opt.handle === '') {
            $el = this;
        } else {
            $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on('mousedown', function (e) {
            var $drag, drg_w, drg_h, pos_x, pos_y;

            if (opt.handle === '') {
                $drag = $(this).addClass('draggable mover');
            } else {
                $drag = $(this).addClass('active-handle') //
                .parent().addClass('draggable');
            }

            drg_w = $drag.outerWidth();
            drg_h = $drag.outerHeight();
            pos_x = $drag.offset().left + drg_w - e.pageX;
            pos_y = $drag.offset().top + drg_h - e.pageY;

            $drag.css('z-index', neoz++).parents().on('mousemove', function (e) {
                $('.draggable').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w,
                }).on('mouseup', function () {
                    $(this).removeClass('draggable mover');
                });
            });
            e.preventDefault(); // disable selection

        }).on('mouseup', function () {
            if (opt.handle === '') {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });
    }

    $('p:not(.static)').drags();

})(jQuery);
