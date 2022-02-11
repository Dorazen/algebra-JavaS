var url = "https://api.covid19api.com/summary";
fetch(url)
.then(response => response.json())
.then(data => coronaData(data));

function coronaData(data) {
    let tab = 
    `<tr>
        <th>Country</th>
        <th>Total cases</th>
        <th>total deaths</th>          
    </tr>`;

    for (let i of data.Countries) {
        tab = tab + `<tr>
        <td><b>${i.Country}</b></td>
        <td><i>${i.TotalConfirmed}</i></td>
        <td>${i.TotalDeaths}</td>
        </tr>`;
    }
    document.getElementById("covid-data").innerHTML = tab;
}

fetch("https://api.covid19api.com/summary")
.then(response => response.json())
.then(data => document.getElementById("para-1").innerHTML = `COVID-19: Worldwide Statistics
There is a total of ${data.Global.TotalConfirmed} confirmed COVID-19 cases worldwide. So far, ${data.Global.TotalDeaths} people have died because of COVID-19. 
Data is updated automatically once a day. Data updated on ${data.Global.Date}.`);
var x = document.getElementById("wrapper");
var msg = document.createElement("p");
x.appendChild(msg);
msg.setAttribute("id", "para-1");


