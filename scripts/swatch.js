/*jslint es5:true, white:false */
/*globals $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$('p:not(.static)').drags();

$('section').drags({
    handle:'.static'
});

$('p:not(.static):not(.etc').track();
$('p.etc').customic();
