fetch('https://api.covid19api.com/summary')
.then(response=>response.json())
.then(data=>{
let count=0;
let html='';

data.Countries.forEach(element => {
    let totaldeath=element.TotalDeaths;
     // console.log(name);
   if(totaldeath>=10000){
    let countryname=element.Country;
    let todaydeath=element.NewDeaths;
    let totaldeath=element.TotalDeaths;
    let todayconfirmed=element.NewConfirmed;
    let totalconfirmed=element.TotalConfirmed;
    let date=element.Date;
    html+=`  
    <div class="col-12">
    <div class="card text-center ">
      <div class="card-header bg-dark text-light">
      ${countryname}
      </div>
      <div class="card-body">
       
        <p class="card-text">Today's death toll: ${todaydeath}</p>
        <p class="card-text">Today's confirmed toll : ${todayconfirmed}</p>
        <p class="card-text">Total death toll : ${totaldeath}</p>
        <p class="card-text">Total confirmed toll : ${totalconfirmed}</p>
       </div>
      <div class="card-footer text-muted">
      ${date}
      </div>
    </div>
  </div>
  `
}
})
document.getElementById('list').innerHTML = html
})
.catch(error => console.log(error));

