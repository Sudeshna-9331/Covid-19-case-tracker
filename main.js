let data = document.getElementById("data");

async function getCovidData() {
    try {
        let json_data = await fetch("https://api.covid19api.com/summary");
        if (json_data.status == 200) {

            let js_data = await json_data.json();
            console.log(js_data.Countries[0]);
            let countries = js_data.Countries;
            countries.forEach(country => {
                //console.log(country.Country);
                let info = `<div class="card country" >
            <ul class="list-group list-group-flush">
                <li class="list-group-item country_name"> ${country.Country}</li>
                <li class="list-group-item totalCases"><strong>New confirmed:</strong>${country.NewConfirmed}</li>
                <li class="list-group-item curedCases"><strong class="recovered">New recovered:</strong>${country.NewRecovered}</li>
                <li class="list-group-item death"><strong class="deaths">New deaths:</strong>${country.NewDeaths}</li>
            </ul>
        </div>`;
                data.innerHTML += info;
            });

        }
    }catch(error){
        data.innerHTML = `Information not found`;
        data.style.textAlign="center";
        data.style.fontSize="23px";
    }
    



}
getCovidData();