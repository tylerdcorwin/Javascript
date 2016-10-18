
var label = document.querySelector('label');

var textField = document.querySelector('input[name="number"]');
var addGridBtn = document.querySelector('input[name="GenerateGrid"]');

var divToAdd = document.querySelector('div');
//var parToAdd = document.querySelector('p')

addGridBtn.addEventListener('click', addGrid);

function addGrid() {

   // if (textField.value.length) {

        label.classList.remove('error');

        //create the grid using arrays here
        //parseInt covnerts string into int
        //Matrix stores the value from user
        var Matrix = parseInt(textField.value);
        var divisor = Matrix * Matrix;
        var sum = 0;
        
        //base array is what will be stacked
        var baseArray = [];
        //items array is the values that are stored in each stack
        var items = [];
        //open table tag that will translate into html when injected
        var table = "<table>";


        var j = 0;

        //build out the first row using matrix input
        for (var i = 0; i < Matrix; i++) {
            //make columns for each row
            table += '<tr>';
            for (j = 0; j < Matrix; j++)
            {
                items[j] = randomNumber(1, 100);
                if (items[j] % 2 === 0) {                    
                    table += '<td class="blue">';                            
                }
                else if (items[j] % 3 === 0){
                    table += '<td class="red">';
                }
                else{
                    table +='<td>';
                }
                ///
                sum += items[j];
                
                table += items[j];
                table += '</td>';
                
            }
            

        }
        
            //.slice() creates a copy of the items array so that the values get changed
            //for each new row
            baseArray.push(items.slice());

            table += '</tr>';

    console.log(baseArray);
    table += '</table>';
    table += '<p>';
    table += 'average = ' + sum/divisor;
    table += '</p>';
    divToAdd.innerHTML = table;
    
    
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
