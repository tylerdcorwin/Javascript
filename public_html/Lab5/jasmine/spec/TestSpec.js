//Test Suite 1


//this is taking in the captureDollar function and checking for validation for dollar amounts       
describe("dollar", function() {
    //1
    it("should filter $10.03 to $10", function() {
        expect( captureDollar('10.03') ).toBe(10);        
    });
    //2
    it("should filter $0.03 to $0", function() {
        expect( captureDollar('0.03') ).toBe(0);        
    });
    //3
       it("should filter $01.3 to $1", function() {
        expect( captureDollar('01.3') ).toBe(1);        
    }); 
    //4
       it("should filter $9.99 to $9", function() {
        expect( captureDollar('9.99') ).toBe(9);        
    }); 
});

//describe ("cent", function() {
   
   describe("cent", function() {
    
    it("should filter $10.03 to 03 cents", function() {
        expect( captureChange('10.03') ).toBe('03');
    });
    
    it("should filter $0.03 to 03 cents", function() {
        expect( captureChange('0.03') ).toBe('03');
    });
    
    it("should filter $0.3 to 30 cents", function() {
        expect( captureChange('0.3') ).toBe('30');
    });
    
    it("should filter $.3 to 30 cents", function() {
        expect( captureChange('.3') ).toBe('30');
    });
    
    it("should filter $.03 to 03 cents", function() {
        expect( captureChange('.03') ).toBe('03');
    });
    
    it("should filter $0.0 to 00 cents", function() {
        expect( captureChange('0.0') ).toBe('00');
    });
    
    it("should filter $0.00 to 00 cents", function() {
        expect( captureChange('0.00') ).toBe('00');
    });
    
    it("should filter $0.99 to 99 cents", function() {
        expect( captureChange('0.99') ).toBe('99');
    });
    
    it("should filter $0.001 to 00 cents", function() {
        expect( captureChange('0.001') ).toBe('00');
    });
    it("should filter $0.009 to 00 cents", function() {
        expect( captureChange('0.009') ).toBe('00');
    });
});

    
//    //1
//    it("should filter $10.03 to 03 cents", function() {
//        expect ( captureChange('10.03') ).toBe('03');
//    });
//    //2
//    it("should filter $0.03 to 03 cents", function() {
//        expect ( captureChange('0.03') ).toBe('03');
//    });
//
//    //5
//    it("should filter $0.3 to 30 cents", function() {
//        expect ( captureChange('.03') ).toBe('03');
//    });
//
//    //7
//    it("should filter $0.99 to 99 cents", function() {
//        expect ( captureChange('.99') ).toBe('99');
//    });
//
//    //10
//    it("should filter $10.03 to be 3 cents", function() {
//        expect ( captureChange('10.03') ).toBe('03');
//    });
//
//    //3
//    it("should filter $0.30 to be 30 cents", function() {
//        expect ( captureChange('0.3') ).toBe('30');
//    });
//    //4
//    it("should filter $.3 to be 30 cents", function() {
//        expect ( captureChange('.3') ).toBe('30');
//    });
//    //6
//    it("should filter $0.0 to be 00 cents", function() {
//        expect ( captureChange('0.0') ).toBe('00');
//    });
//    //8
//    it("should filter $0.0001 to be 00 cents", function() {
//        expect ( captureChange('0.001') ).toBe('00');
//    });
//    //9
//    it("should filter $0.0009 to be 00 cents", function() {
//        expect ( captureChange('0.009') ).toBe('00');
//    });
//    });