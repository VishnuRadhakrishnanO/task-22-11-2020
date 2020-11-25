var link="https://restcountries.eu/rest/v2/all"

//creating req var
var request =new XMLHttpRequest();
//open the request

request.open('GET',link,true);
//request send
request.send();
//load the responce
request.onload = function (){
    var data=JSON.parse(this.response)
   
        let names_Asia =data.filter(x=>x.region=== "Asia").map(x=>x.name)
        console.log(names_Asia)

}


console.log("List of countries from Asia continent");

