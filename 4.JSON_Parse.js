// JSON.parse() is used to convert a JSON String to a JavaScript Object

var jsonData = '{"name":"Bruce","lname":"Wayne"}';          // JSON String
var jsObj = JSON.parse(jsonData);                           // Parsing JSON String to JavaScript Object
console.log(`Batman is : ${jsObj.name} ${jsObj.lname}`);   
