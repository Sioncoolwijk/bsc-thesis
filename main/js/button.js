/* This script makes it possible to hop to another section within the same page */

function goToPage(event, pageId) {

    var pages = document.getElementsByTagName('section');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById(pageId).style.display = 'block';

    window.scrollTo(0, 0);
}