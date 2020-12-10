chargeHeader();
async function chargeHeader() {
    let response = await fetch("https://localhost:5001/api/Header");
    let data = await response.json();
    console.log(data);
    document.getElementById("legendName").innerHTML = data[0].legendName;                                                                                                                                                                                                                                                                     = data[0].legendName;
    document.getElementById("subLegend").innerHTML = data[0].subLegendName;
    document.getElementById("plans").innerHTML = data[0].plans;
}