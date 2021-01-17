let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)