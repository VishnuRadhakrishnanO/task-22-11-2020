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

     let names_population =data.filter(x=> x.population<200000).map(x=>x.name)
     console.log(names_population)
       
}



console.log("list of countries with population of less than 2 lacs")
