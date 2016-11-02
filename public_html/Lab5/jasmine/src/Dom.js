function getNumber(selector){
    var element = document.querySelector(selector);
    return  isNaN(element.Value);
}

function getDecoration(selector){
    var element = document.querySelector(selector);
    return element.style.textDecoration;
}