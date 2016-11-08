



function sandboxInputOnly() {
    var el;
//prior to execution of function get values
    beforeEach(function () {
        el = document.createElement('input');
//hard coded input values 
        el.setAttribute('id', 'numbers');
        el.setAttribute('value', '123');
        el.setAttribute('type', 'text');
//add el to the DOM
        document.body.appendChild(el);
    });
//remove el from the DOM and reset
    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });
}
function sandboxNumChar() {
    var numChar;
//prior to execution of function get values
    beforeEach(function () {
        numChar = document.createElement('input');
//hard coded input values 
        numChar.setAttribute('id', 'numChar');
        numChar.setAttribute('value', '123abc');
        numChar.setAttribute('type', 'text');
//add numChar to the DOM
        document.body.appendChild(numChar);
    });
//remove numChar from the DOM and reset
    afterEach(function () {
        document.body.removeChild(numChar);
        numChar = null;
    });
}
function sandboxSpecialChar() {
    var spChar;
//prior to execution of function get values
    beforeEach(function () {
        spChar = document.createElement('input');
//hard coded input values 
        spChar.setAttribute('id', 'spChar');
        spChar.setAttribute('value', '=#$%');
        spChar.setAttribute('type', 'text');
//add spChar to the DOM
        document.body.appendChild(spChar);
    });
//remove spChar from the DOM and reset
    afterEach(function () {
        document.body.removeChild(spChar);
        numChar = null;
    });
}

//text Decoration Overline using Class
function txtDecsOver(textdecoration) {
    var txtDecsOver;
//prior to execution of function get text Decoration style
    beforeEach(function () {
        txtDecsOver = document.createElement(textdecoration);
        txtDecsOver.style.textDecoration = 'overline';
        txtDecsOver.classList.add('decClass');
//add txtDecsOver to the DOM    
        document.body.appendChild(txtDecsOver);
    });
//remove txtDecsOver from the DOM and reset  
    afterEach(function () {
        document.body.removeChild(txtDecsOver);
        txtDecsOver = null;
    });
}

//text Decoration styles using Class
function txtDecs(textdecoration) {
    var txtDec;
//prior to execution of function get txtDec Style
    beforeEach(function () {
        txtDec = document.createElement(textdecoration);
        txtDec.style.textDecoration = '';
        txtDec.classList.add('decClass');
//add txtDec to the DOM    
        document.body.appendChild(txtDec);
    });
//remove txtDec from the DOM and reset
    afterEach(function () {
        document.body.removeChild(txtDec);
        txtDec = null;
    });

}

//inputOnly
describe("Input number only", function () {
//validate that the entry is numbers only using isNaN()
    sandboxInputOnly();
    //1
    it('should return true if the input box value is only numeric', function () {
        var elemContent = getNumber('#numbers');
        expect(elemContent).toBe(true);
    });
});
//numChar
describe("Input number and string", function () {
//validate that the entry is numbers only using isNaN()
    sandboxNumChar();
    //1
    it('should return false if the input box value is not all numeric', function () {
        var elemContent = getNumber('#numChar');
        expect(elemContent).toBe(true);
    });
});
//specialChar   
describe("Input special characters", function () {
//validate that the entry is numbers only using isNaN()
    sandboxSpecialChar();
    //1
    it('should return false if the input box value is not all numeric', function () {
        var elemContent = getNumber('#spChar');
        expect(elemContent).toBe(true);
    });
});

describe("text-decoration set", function () {

    txtDecsOver('div');

    it('should match overline', function () {
        var elemContent = getDecoration('div.decClass');
        expect(elemContent).toEqual('overline');

    });

    it('should not match none', function () {
        var elemContent = getDecoration('div.decClass');
        expect(elemContent).not.toEqual('none');

    });

    it('should not match underline', function () {
        var elemContent = getDecoration('div.decClass');
        expect(elemContent).not.toEqual('underline');

    });

    it('should not match line-through', function () {
        var elemContent = getDecoration('div.decClass');31

    });
});


3r elemContent = getDecoration('div.decClass');
        expect(elemContent).not.toEqual('none');

    });

    it('should not match underline', function () {
        var elemContent = getDecoration('div.decClass');
        expect(elemContent).not.toEqual('underline');

    });

    it('should not match line-through', function () {
        var elemContent = getDecoration('div.decClass');
        expect(elemContent).not.toEqual('line-through');
    });
});
