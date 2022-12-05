
function Statistika() {
    let value=document.querySelector(".countryinp").value;
    fetch('https://api.covid19api.com/summary')
    .then(response=>response.json())
    .then(data=>{
  let count=0;
  let html='';
  
  data.Countries.forEach(element => {
  
    let name=element.Country.toLowerCase().includes(value.toLowerCase());
    // console.log(name);
   if(name){
    count++;
    let todaydeath=element.NewDeaths;
    let totaldeath=element.TotalDeaths;
    let todayconfirmed=element.NewConfirmed;
    let totalconfirmed=element.TotalConfirmed;
    let date=element.Date;
    let countryname=element.Country;
    html+=`  
    <div class="col-6 text-center mx-auto ">
    <div class="card text-center">
      <div class="card-header">
        COVİD Information
      </div>
      <div class="card-body">
        <h5 class="card-title">${countryname}</h5>
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
if(count === 0) {
 document.querySelector('.error').classList.remove('d-none')
 document.querySelector('#allpage-withouterror').classList.add('d-none')

}
else{
 document.querySelector('.error').classList.add('d-none')
}

document.getElementById('list').innerHTML = html
})
.catch(error => console.log(error))
}
