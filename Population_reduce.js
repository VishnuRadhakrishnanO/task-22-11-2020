var link="https://restcountries.eu/rest/v2/all"

//creating req var
var request =new XMLHttpRequest();
//open the request

request.open('GET',link,true);
//request send
request.send();
//load the responce
request.onload = function (){
    var data=JSON.parse(this.response);

const filterditem = data.reduce(function(sum,x){sum+=x.population;return sum;},0);

console.log("World Population is: "+filterditem)
}
console.log(" World Population.")