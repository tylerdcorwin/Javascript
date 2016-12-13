



/* global expect */

function sandbox(input, value) {
    var el;
//prior to execution of function get values
    beforeEach(function () {
        el = document.createElement(input);
        el.classList.add('numbersOnly');
        el.value = value;
        
//add el to the DOM
        document.body.appendChild(el);
    });
//remove el from the DOM and reset
    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });
}

function sandbox1(textdecoration) {
    var txtDec;
    beforeEach(function() {
        txtDec = document.createElement(textdecoration);
        txtDec.style.textDecoration = 'overline';
        txtDec.classList.add('ovClass');
        document.body.appendChild(txtDec);
    });
    
    afterEach(function() {
        document.body.removeChild(txtDec);
        txtDec = null;
    });
    
}


function sandbox2(textdecoration) {
    var txtDec;
    
    beforeEach(function() {
        txtDec = document.createElement(textdecoration);
        txtDec.style.textDecoration = '';
        txtDec.classList.add('ovClass');
        document.body.appendChild(txtDec);
    });
    
    afterEach(function() {
        document.body.removeChild(txtDec);
        txtDec = null;
    });
}



//inputOnly

describe("input number only", function () {
    sandbox('div', '123');
    it('should return true if the input box value is only numeric', function () {
        var elemContent = getNumber('div.numbersOnly');
        expect(elemContent).toBe(false);
    });
});

//numChar
describe("Input number and string", function () {
//validate that the entry is numbers only using isNaN()
    sandbox('div', 'abc123');
    //1
    it('should return false if the input box value is not all numeric', function () {
        var elemContent = getNumber('div.numbersOnly');
        expect(elemContent).toBe(false);
    });
});

//txtDec
describe("text-decoration set", function () {
    sandbox1('div');
    it('should match overline', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).toEqual('overline');

    });

    it('should not match none', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('none');

    });

    it('should not match underline', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('underline');

    });

    it('should not match line-through', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('line-through');

    });
});
//txtDec !set
describe("text-decoration not set", function () {
    sandbox2('div');
    it ('should not match overline', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('overline');

    });
    
    it('should not match none', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('none');
        });

    it('should not match underline', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('underline');

    });

    it('should not match line-through', function () {
        var elemContent = getDecoration('div.ovClass');
        expect(elemContent).not.toEqual('line-through');
    });
});
