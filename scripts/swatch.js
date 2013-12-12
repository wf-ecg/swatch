
$('p:not(.static)').drags();

$('section').drags({
    handle:'.static'
});

$('p:not(.static)').track();
