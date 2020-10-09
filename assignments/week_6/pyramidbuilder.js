/*
*
**
***
****
*****
****
***
*
*/
var pyramidHeight = 20
var column = '';
for(var i = 0; i < pyramidHeight; i = i + 1 ){
    column = column + '*';
    console.log(column);
}
/*console.log('final colum stat:', column);

var columnArray = column.split('');

console.log(colunArray);

columnArray.pop();
//console.log(columArray);

var updatedColumn = columnArray.join('');

//console.log(updatedColumn);
*/

for (var i = 0; i < pyramidHeight; i = i + 1) {
    var columnArray = column.split('');
    columnArray.pop();
    column = columnArray.join();
    console.log(column);
}

