//Test Suite 1


'use strict';
//this is taking in the full string and returning the dollar amount only
function captureDollar(str){
    if (typeof str !== 'string' ) return str;
    return parseInt(str);    
}
//this is taking in the full string and returning the change only
function captureChange(str){
  
    if (typeof str !== 'string' )return str;
    var arrayString = str.split(".");
    //split 10.03 into 2 array parts [0] = 10 && [1] = 03
    var cent = arrayString[1];
    //if only 1 value after decimal point multiply by 10
    if (cent.length === 1 ){
        cent = cent*10;
        if(cent === 0){
            cent = '00';
        }
        return cent.toString();
    }
    if (cent.length >= 2 ){
        cent = (cent[0] + cent[1]).toString();
        return cent.toString();
    }
    
    
                
}
