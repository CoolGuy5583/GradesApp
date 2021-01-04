function submitCursor() {
    var things = document.getElementsByClassName('text-field')
    var submit = document.getElementById('submit');
    var canSubmit = true;
    for (i=0;i<things.length;i++) {
        if (things[i].value.length == 0) {
            canSubmit = false;
            break;
        }
    }
    if (canSubmit) {
        submit.disabled = false;
        submit.style.cursor = 'pointer';
        submit.style.background = 'linear-gradient(to bottom left, #0090ff, #0060ff)';
        return;
    } else {
        submit.disabled = true;
        submit.style.cursor = 'auto';
        submit.style.background = 'lightgray';
    }
}

submitCursor();