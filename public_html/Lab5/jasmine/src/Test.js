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
    var cent = arrayString[1];

//this 
    if (cent.length === 3 )
    {
        cent = '00';
    }
//for $1.x
    if (cent.length === 1)
    {
        var centNum = cent[0] * 10;
        cent = centNum.toString();
    }
//
if( cent.length === 1){
        var centNum = cent[0];
        cent = "00";
    }    
    
    return cent;
                
}
