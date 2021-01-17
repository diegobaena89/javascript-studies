const input = document.getElementById('input');
addEventListener
input.addEventListener('keydown', function() {
    console.log('função disparada');
})

input.addEventListener('keyup', () => {
    console.log('epaaa')
})

input.addEventListener('keypress', () => {
    console.log('pressed')
})