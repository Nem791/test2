let btns = document.querySelectorAll('.btns');

function removeClass(params) {
    params.forEach(element => {
        element.classList.remove('active');
    })
}

btns.forEach(element => {
    element.addEventListener('click', () => {
        removeClass(btns);
        element.classList.add('active');
    })
})



let resultElement = document.getElementById('final-link');
function getLink(inputLink) {
    if (inputLink == '') {
        resultElement.innerHTML = 'Không được để trống input';
    }
    submitBtn.disabled = true;
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log(data.result);
            let linkType = document.querySelector('.active');
            if (linkType == null) {
                resultElement.innerHTML = 'Bạn chưa chọn loại domain';
                submitBtn.disabled = false;
            } else {
                resultElement.innerHTML = data.result[linkType.dataset.link];
                submitBtn.disabled = false;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

let submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', () => {

    
    console.log('da click');
    let userInput = document.querySelector('.user-input').value;
    resultElement.innerHTML = 'Vui lòng chờ trong giây lát...';
    getLink(userInput);
})
