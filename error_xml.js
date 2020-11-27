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
   
        let population_Asia =data.filter(x=>x.region=== "Asia").reduce(function(sum,x){sum+=x.population;return sum;},0);
        console.log(population_Asia)
        try{   
      if(population_Asia>1000)
      {
         throw new SyntaxError('population is high')
      }
    }
      catch(error){
        alert(error.name);
        alert(error.message);
    }

}



console.log("population of countries in Asia");

