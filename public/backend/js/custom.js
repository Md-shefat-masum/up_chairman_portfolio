window.render_alert = (error) => {
    console.log('from render alert', error);
    let errors = error.response?.data?.data;
    errors.forEach(e => {
        var parentDiv = document.getElementById(e.path);
        console.log(parentDiv,'jdklsfjldsjl');
        if (!parentDiv) {
            parentDiv = document.getElementsByName(e.path)[0];
            console.log(parentDiv);
        }
        parentDiv.parentNode.insertAdjacentHTML('beforeend', `<Div class="form_error text-warning">${e.msg}</Div>`)
        
    });
}