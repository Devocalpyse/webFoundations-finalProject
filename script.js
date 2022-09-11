let fname = document.getElementById('name');
let title = document.getElementById('title');

// The name
    fname.addEventListener('mouseover', () => {
        fname.classList.remove('decreaseName')
        fname.classList.add('increaseName');
    });

    fname.addEventListener('mouseout', () => {
        fname.classList.remove('increaseName');
        fname.classList.add('decreaseName')
    });

// The title
    title.addEventListener('mouseover', () => {
        title.classList.remove('decreaseTitle')
        title.classList.add('increaseTitle');
    });

    title.addEventListener('mouseout', () => {
        title.classList.remove('increaseTitle');
        title.classList.add('decreaseTitle')
    });

$.ajax(
    'https://api.adviceslip.com/advice', {
        success: function (response) {
            // Turn response into a JSON object
            let getAdvice = JSON.parse(response);
            
            // Change innerHTML
            let advice = document.createElement('p');
            advice.innerHTML = getAdvice.slip.advice
            document.getElementById('adviceWrapper').appendChild(advice);
        }
    }
)