const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    let height = Number(document.querySelector("#inp-height").value)
    let weight = Number(document.querySelector("#inp-weight").value)
    let result = document.querySelector("#result")

    let bmi = weight / (height * height)
    console.log(bmi);

    if (height === "" || isNaN(height) || height <= 0) {
        result.innerHTML = `Provide a valid height`
    }
    else if (weight === "" || isNaN(weight) || weight <= 0) {
        result.innerHTML = `Provide a valid weight`
    }
    else {
        result.innerHTML = bmi.toFixed(2)
    }
})