var url = "https://api.covid19api.com/summary";
fetch(url)
.then(response => response.json())
.then(data => coronaData(data));

function coronaData(data) {
    let tab = `<caption id="hero"> Covid19: Worldwide Statistics
    <p id="total">There is a total of ${data.Global.TotalConfirmed} confirmed COVID-19 cases worldwide. So far, ${data.Global.TotalDeaths} people have died because of COVID-19. 
    Data is updated automatically once a day. Data updated on ${data.Global.Date}.</p>
    <tr>
        <th>Country</th>
        <th>Total cases</th>
        <th>Total deaths</th>          
    </tr>
    `;

    for (let i of data.Countries) {
        tab = tab + `<tr>
        <td><b>${i.Country}</b></td>
        <td><i>${i.TotalConfirmed}</i></td>
        <td>${i.TotalDeaths}</td>
        </tr>`;
    }
    document.getElementById("covid-data").innerHTML = tab;
}

function showError(error) {
  document.getElementById("error").style.display = "inherit";
  document.getElementById("error-message").innerHTML = `${error}`;
}