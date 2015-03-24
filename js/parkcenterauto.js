/**
 * Created by Davis on 3/24/2015.
 */
//$('document').ready(function() {
//    var options = {
//        videoId: 'VFS-vTtTqew',
//        start: 1,
//        ratio: 4/3 // usually either 4/3 or 16/9 -- tweak as needed
//    };
//    $('#tubularContainer').tubular(options);
//
//});
$(window).load(function() {
    $('#masonryContainer').masonry({
        columnWidth: 170,
        itemSelector: '.item'
    }).imagesLoaded(function() {
        $('masonryContainer').masonry('reload');
    });
});