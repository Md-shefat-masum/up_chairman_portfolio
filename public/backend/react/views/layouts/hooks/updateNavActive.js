export default function(){
    var all_nav = document.querySelectorAll('nav .nav_link');
    [...all_nav].forEach(el => el.classList.remove('active'));
    
    var el = document.querySelector(`nav a[href="${window.location.hash}"]`);
    if (el) {
        el.parentNode.classList.add('active');
        var parent_nav_link = el.parentNode.parentNode.parentNode.previousSibling;
        if (parent_nav_link && parent_nav_link.classList.contains('nav_link')) {
            parent_nav_link.classList.add('active');
        }
    }

    if(window.location.hash === '#/'){
        document.getElementById('app').classList.add('sidebar_hide');
    }
}