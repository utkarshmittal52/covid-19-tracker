
let country, cases,deaths,tests,
recovered ,
todaycases,
todaydeaths,latitude,longitude,
todayrecovered= [];
window.onload = function () {
   
fetch("https://corona.lmao.ninja/v2/countries/india")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data)
    country = data.country;
    active = data.active;
        cases = data.cases;
        recovered = data.recovered;
        deaths = data.deaths;
        tests= data.tests;
        
        latitude = data.countryInfo.lat;
        longitude = data.countryInfo.long;
        todaycases =data.todayCases;
        todaydeaths = data.todayDeaths;
        todayrecovered = data.todayRecovered;
        
       var mainCountry = document.getElementById("myCountry");
       mainCountry.innerHTML = 'Country : ' + country;

       var mainActive = document.getElementById("myActive");
       mainActive.innerHTML = 'Active : ' + active;

         var mainCases = document.getElementById("myCases");
        mainCases.innerHTML = 'Cases : ' + cases;

         var mainRecovered = document.getElementById("myRecovered");
        mainRecovered.innerHTML = 'Recovered : ' + recovered;

         var mainDeaths = document.getElementById("myDeaths");
        mainDeaths.innerHTML = 'Deaths : ' + deaths;

        var mainCasesToday = document.getElementById("myCasesToday");
        mainCasesToday.innerHTML = ' ↑' + todaycases;

        var mainRecoveredToday = document.getElementById("myRecoveredToday");
        mainRecoveredToday.innerHTML = ' ↑' + todayrecovered;

        var mainDeathsToday = document.getElementById("myDeathsToday");
        mainDeathsToday.innerHTML = ' ↑' + todaydeaths;
        // mainContainer.appendChild(div);
        var marker = new mapboxgl.Marker({
            draggable: true
            })
        .setLngLat([longitude,latitude])
        .addTo(map);

        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light1", // "light2", "dark1", "dark2"
            animationEnabled: true, // change to true		
            title:{
                text: "corona"
            },
            data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "bar",
                dataPoints: [
                    { label: "Active",  y: active},
                    { label: "Cases", y: cases },
                    { label: "Recovered", y: recovered },
                    { label: "Deaths",  y: deaths},
                    // { label: "grape",  y: 28144  }
                ]
            }
            ]
        });
        chart.render();
       
         
             
    });
        }
        
    
    
    
