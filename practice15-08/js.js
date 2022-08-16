function makered(color) {


    document.body.style.backgroundColor = color;
}

///option2

const makeBlueButton = document.getElementById('make-blue');

makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//opttion 3

const youlow = document.getElementById('mmy');

youlow.onclick = function makey() {
    document.body.style.backgroundColor = '#ffc107';
}


///option4

const mmakePink = document.getElementById('pink');
mmakePink.addEventListener('click', function () {
    document.body.style.background = 'green';
})


//Final Dom Event Handel

function handeleOnclick() {
    const handleStus = document.getElementById('handle-staus');
    handleStus.innerText = 'Bai kamon acho';
}
//Final Dom Event Handel text updated by add event listner button
document.getElementById('evvent-l').addEventListener('click', function () {
    const handleStuss = document.getElementById('handle-staus');
    handleStuss.innerText = 'text updated by add event listner button'
})




document.getElementById('button-update').addEventListener('click', function () {
    const myInput = document.getElementById('my-input');
    const inputd = myInput.value;
    const p = document.getElementById('input-set');
    p.innerText = inputd;
    myInput.value = '';

})


// <!-- make a  from commend box -->

document.getElementById('post-btn').addEventListener('click', function () {
    const commenBox = document.getElementById('new-comment');
    const newComment = commenBox.value;


    const comentpara = document.getElementById('para');
    const p = document.createElement('p');
    p.innerText = newComment;
    comentpara.appendChild(p);
    commenBox.value = '';
})


// <!-- more evends git hub -->
document.getElementById('my-info').addEventListener('keyup', function (e) {
    const text = e.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text == 'delete') {
        deleteButton.removeAttribute('disabled');

    }
    else {
        deleteButton.setAttribute('disabled', true)
    }
})

document.getElementById('btn-delete').addEventListener('click', function () {
    const myInput = document.getElementById('my-info')
    const h1Info = document.getElementById('h1-info');
    h1Info.remove();
    // h1Info.style.display='none';
    myInput.value = '';

})