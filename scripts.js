const slider = document.getElementById('progress');

let slide = function() {
    const val = slider.value;
    console.log(val)
    if (val >= 1) {
        if (val >= 3) {
            document.getElementById('dash-a3').hidden=false;
        }
        if (val >= 2) {
            document.getElementById('dash-a2').hidden=false;
        }
        document.getElementById('dash-a1').hidden=false;
    }

    if (val >= 4) {
        document.getElementById('info1').hidden = false;
        document.getElementById('point1').className = 'circle closed';
        if (val >= 7) {
            document.getElementById('dash-b3').hidden=false;
        }
        if (val >= 6) {
            document.getElementById('dash-b2').hidden=false;
        }
        if (val >= 5) {
            document.getElementById('dash-b1').hidden=false;
        }
    }

    if (val >= 8) {
        document.getElementById('info2').hidden = false;
        document.getElementById('point2').className = 'circle closed';
        if (val >= 12) {
            document.getElementById('dash-c4').hidden=false;
        }
        if (val >= 11) {
            document.getElementById('dash-c3').hidden=false;
        }
        if (val >= 10) {
            document.getElementById('dash-c2').hidden=false;
        }
        if (val >= 9) {
            document.getElementById('dash-c1').hidden=false;
        }
    }

    if (val >= 13) {
        document.getElementById('info3').hidden = false;
        document.getElementById('point3').className = 'circle closed';
        if (val >= 18) {
            document.getElementById('dash-d5').hidden=false;
        }
        if (val >= 17) {
            document.getElementById('dash-d4').hidden=false;
        }
        if (val >= 16) {
            document.getElementById('dash-d3').hidden=false;
        }
        if (val >= 15) {
            document.getElementById('dash-d2').hidden=false;
        }
        if (val >= 14) {
            document.getElementById('dash-d1').hidden=false;
        }
    }

    if (val >= 19) {
        document.getElementById('info4').hidden = false;
        document.getElementById('point4').className = 'circle closed';
        if (val >= 22) {
            document.getElementById('dash-e3').hidden=false;
        }
        if (val >= 21) {
            document.getElementById('dash-e2').hidden=false;
        }
        if (val >= 20) {
            document.getElementById('dash-e1').hidden=false;
        }
    }

    if (val >= 25) {
        document.getElementById('finish').hidden = false;
    }

    if (val <= 4) {
        document.getElementById('info1').hidden = true;
        document.getElementById('point1').className = 'circle open';

        if (val <= 3) {
            document.getElementById('dash-a3').hidden = true;
        }
        if (val <= 2) {
            document.getElementById('dash-a2').hidden = true;
        }
        if (val <= 1) {
            document.getElementById('dash-a1').hidden = true;
        }
    }

    if (val <= 8) {
        document.getElementById('info2').hidden = true;
        document.getElementById('point2').className = 'circle open';

        if (val <= 7) {
            document.getElementById('dash-b3').hidden = true;
        }
        if (val <= 6) {
            document.getElementById('dash-b2').hidden = true;
        }
        if (val <= 5) {
            document.getElementById('dash-b1').hidden = true;
        }
    }

    if (val <= 13) {
        document.getElementById('info3').hidden = true;
        document.getElementById('point3').className = 'circle open';
        if (val <= 12) {
            document.getElementById('dash-c4').hidden = true;
        }
        if (val <= 11) {
            document.getElementById('dash-c3').hidden = true;
        }
        if (val <= 10) {
            document.getElementById('dash-c2').hidden = true;
        }
        if (val <= 11) {
            document.getElementById('dash-c1').hidden = true;
        }
    }

    if (val <= 19) {
        document.getElementById('info4').hidden = true;
        document.getElementById('point4').className = 'circle open';
        if (val <= 18) {
            document.getElementById('dash-d5').hidden = true;
        }
        if (val <= 17) {
            document.getElementById('dash-d4').hidden = true;
        }
        if (val <= 16) {
            document.getElementById('dash-d3').hidden = true;
        }
        if (val <= 15) {
            document.getElementById('dash-d2').hidden = true;
        }
        if (val <= 14) {
            document.getElementById('dash-d1').hidden = true;
        }
    }

    if (val <= 23) {
        document.getElementById('finish').hidden = true;
        
        if (val <= 23) {
            document.getElementById('dash-e3').hidden = true;
        }
        if (val <= 21) {
            document.getElementById('dash-e2').hidden = true;
        }
        if (val <= 20) {
            document.getElementById('dash-e1').hidden = true;
        }
    }
}

slide();

slider.oninput = slide;
