const body = document.getElementById('body');

body.addEventListener('resize', () => {
    console.log('evento disparado')
})

body.addEventListener('scroll', function() {
    console.log("ae")
})