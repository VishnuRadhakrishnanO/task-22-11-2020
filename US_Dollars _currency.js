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

const filterditem = data.filter((x)=>x.currencies[0].code==='USD').map(x=>x.name)
    console.log(filterditem)

}
console.log(" Country which use US Dollars as currency.")