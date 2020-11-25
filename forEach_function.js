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

 data.forEach(element => console.log("Country name: "+element.name+", Capital: "+element.capital+", flag :"+element.flag  ));
    

 
}
console.log(" Details name, capital, flag using forEach function")