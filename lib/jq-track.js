/*jslint es5:true, white:false */
/*globals $, console, jQuery */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function ($) {
    var Palette = $.wfcolor();
    // upon events
    //
    // take coordinates
    // store using ...
    // reposition on open
    // provide clear button

    function classScan(str) {
        var arr;

        if (str) {
            arr = str.split(/\s+/).filter(function (e) {
                return e.charAt(0) === '_';
            }).pop();
        }
        return arr;
    }

    function expandAbbr(str) {
        var hash = {
            a: 'active',
            e: 'earth',
            d: 'dark',
            l: 'light',
            m: 'medium',
            n: 'neutral',
            wf: true,
        };
        return (hash[str] || str);
    }

    function brandLookup(str) {
        var arr, tmp, wfc = Palette;

        str = classScan(str);

        if (str) {
            arr = str.split(/_/);
            tmp = arr.shift(); // clear leading null

            while (arr.length) {
                tmp = expandAbbr(arr.shift());
                if (!tmp || tmp === true) {
                    continue;
                }
                wfc = wfc[tmp];
            }
        }
        return wfc;
    }

    $.fn.track = function (opt) {
        opt = opt || {};

        this.each(function () {
            var me = $(this);

            me.bind('dblclick', function () {
                alert('Brand value ' + brandLookup(me.attr('class')));
            });
        });
    };

}(jQuery));
