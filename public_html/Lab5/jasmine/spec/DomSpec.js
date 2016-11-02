/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function sandboxInputOnly() {
    var el;

    beforeEach(function () {
        el = document.createElement('input');
//hard coded input values 
        el.setAttribute('id', 'numbers');
        el.setAttribute('value', '123');
        el.setAttribute('type', 'text');

        document.body.appendChild(el);

    });


    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });

}


describe("getElementContent text", function () {

    sandboxInputOnly();

    it('should return true if the input box value is only numeric', function () {
        var elemContent = getNumber('#numbers');
        expect(elemContent).toBe(true);
        
        
    });

   


});
