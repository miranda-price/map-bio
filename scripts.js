const slider = document.getElementById('progress');

let slide = function() {
    const val = slider.value;
    if (val >= 16) {
        document.getElementById('info1').hidden = false;
        document.getElementById('point1').className = 'circle closed';
    }

    if (val >= 32) {
        document.getElementById('info2').hidden = false;
        document.getElementById('point2').className = 'circle closed';
    }

    if (val >= 48) {
        document.getElementById('info3').hidden = false;
        document.getElementById('point3').className = 'circle closed';
    }

    if (val >= 66) {
        document.getElementById('info4').hidden = false;
        document.getElementById('point4').className = 'circle closed';
    }

    if (val >= 82) {
        document.getElementById('info5').hidden = false;
        document.getElementById('point5').className = 'circle closed';
    }

    if (val >= 98) {
        document.getElementById('finish').hidden = false;
        document.getElementById('point-end').className = 'circle closed';
    }

    if (val <= 16) {
        document.getElementById('info1').hidden = true;
        document.getElementById('point1').className = 'circle open';
    }

    if (val <= 32) {
        document.getElementById('info2').hidden = true;
        document.getElementById('point2').className = 'circle open';
    }

    if (val <= 48) {
        document.getElementById('info3').hidden = true;
        document.getElementById('point3').className = 'circle open';
    }

    if (val <= 66) {
        document.getElementById('info4').hidden = true;
        document.getElementById('point4').className = 'circle open';
    }

    if (val <= 82) {
        document.getElementById('info5').hidden = true;
        document.getElementById('point5').className = 'circle open';
    }

    if (val <= 98) {
        document.getElementById('finish').hidden = true;
        document.getElementById('point-end').className = 'circle open';
    }
}

slider.oninput = slide;
