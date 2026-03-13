const Form = document.querySelector('form');

Form.addEventListener('submit',function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Give A valid height ${height}`
        results.style.color = "red";
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Give a valid weight ${weight}`
        results.style.color = "red";
    }else {
        const bmi = weight / ((height * height) / 10000).toFixed(2);

        let category = '';
        if(bmi <= 18.6){
            category = "UnderWeight";
            results.style.color = "orange";
        }else if (bmi <= 24.9) {
            category = "NormalRange";
            results.style.color = "green";
        }else if (bmi <= 29.9) {
            category = "OverWeight";
            results.style.color = "orange"
        }else {
            category = "Obesity"
            results.style.color = "red";
        }
        results.innerHTML = `<span>${bmi.toFixed(2)}</span><br>
        <span>Cateory: ${category}<span>`
        
    };
});