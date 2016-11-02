//Test Suite 1


//this is taking in the captureDollar function and checking for validation for dollar amounts       
describe("captureDollar", function() {
    //1
    it("should take a dollar amount with change and return only the dollar amount", function() {
        expect( captureDollar('10.03') ).toBe(10);        
    });
    //2
    it("should take a dollar amount with change and return only the dollar amount", function() {
        expect( captureDollar('0.03') ).toBe(0);        
    });
    //3
       it("should take a dollar amount with change and return only the dollar amount", function() {
        expect( captureDollar('01.3') ).toBe(1);        
    }); 
});

describe ("captureChange", function() {
    //1
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('10.03') ).toBe('03');
    });
    //2
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('0.03') ).toBe('03');
    });

    //5
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('.03') ).toBe('03');
    });

    //7
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('.99') ).toBe('99');
    });

    //10
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('10.03') ).toBe('03');
    });



    //3
    it("should multiply by 10 to get correct change", function() {
        expect ( captureChange('0.3') ).toBe('30');
    });
    //4
    it("should multiply by 10 to get correct change", function() {
        expect ( captureChange('.3') ).toBe('30');
    });
    //6
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('0.0') ).toBe('00');
    });
    //8
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('0.001') ).toBe('00');
    });
    //9
    it("should take in the string and return only the array after the decimal", function() {
        expect ( captureChange('0.009') ).toBe('00');
    });
    });