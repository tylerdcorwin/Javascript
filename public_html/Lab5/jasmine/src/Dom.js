
//get number values
function getNumber(selector){
    var element = document.querySelector(selector);
    return  !isNaN(element.Value);
}
//get text decoration values
function getDecoration(selector){
    var element = document.querySelector(selector);
    return element.style.textDecoration;
}