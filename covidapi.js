function fetchLiveCount(){
    var request =new XMLHttpRequest();
    var country=document.getElementById("country").value;
    console.log(country);
    var url= `https://api.covid19api.com/live/country/${country}`;
    console.log(url)
    request.open('GET',url,true);
    request.send();
    request.onload=function()
    {
        var result=JSON.parse(this.response)
        table=document.createElement("table");
        table.border="2"
        table.align="center"
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH4=row.insertCell(-1)
        cellH5=row.insertCell(-1)
        cellH1.innerHTML="PROVINCE"
        cellH2.innerHTML="ACTIVE"
        cellH3.innerHTML="RECOVERED"
        cellH4.innerHTML="DEATHS"
        cellH5.innerHTML="CONFIRMED"
        result.forEach((day) =>
        {
            row1=table.insertRow(-1);
            cell1=row1.insertCell(-1);
            cell2=row1.insertCell(-1);
            cell3=row1.insertCell(-1);
            cell4=row1.insertCell(-1);
            cell5=row1.insertCell(-1);
            cell1.innerHTML=day.Province;
            cell2.innerHTML=day.Active;
            cell3.innerHTML=day.Recovered;
            cell4.innerHTML=day.Deaths;
            cell5.innerHTML=day.Confirmed;
            console.log(day)
        })
        document.getElementById("tempDisplay").append(table)
        
    }
    
    console.log("Fetching......")
}