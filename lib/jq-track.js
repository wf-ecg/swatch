(function ($) {

    $.fn.track = function (opt) {
        opt = void(opt);

        this.each(function () {
            var me = $(this);
            me.bind('dblclick', function () {
                classScan(me.attr('class'));
            });
        });
    // upon events

    //
    // take coordinates
    // store using ...
    // reposition on open
    // provide clear button
    }

}(jQuery));

function classScan(str) {
    var arr = str.split(/\s+/);
    arr = arr.filter(function (e) {
        return e.charAt(0) === '_';
    });

    alert(arr);
}
