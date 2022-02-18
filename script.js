document.getElementById('switch').onchange = function () {
    if (document.body.className === 'palette-white') {
        document.body.className = 'palette-dark'
    } else {
        document.body.className = 'palette-white'
    }
}
