const submit = document.querySelector('.submit')
const bmihasil = document.querySelector('#hasil')
const bmi = document.querySelector('.bmi')
const bmitext = document.querySelector('.bmi-hasil')
let hasil = 0

submit.addEventListener('click', function(){
    bmihasil.style.display = 'flex'
    const bb = parseInt(document.querySelector('#bb').value)
    const tb = parseInt(document.querySelector('#tb').value)

    hasil = bb / ( tb / 100 * tb / 100)

    bmi.innerHTML = hasil

    // INGAT KOMANYA PAKAI TITIK!!!
    if (hasil < 18)
        bmitext.innerHTML = 'Kurus';
    else if (hasil < 22.9 && hasil > 18.5)
        bmitext.innerHTML = 'Ideal'
    else if (hasil < 24.9 && hasil > 23)
        bmitext.innerHTML = 'Overweight';
    else 
        bmitext.innerHTML = 'Obesitas';
        
})