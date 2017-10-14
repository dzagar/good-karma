function GetRedCrossLocations(city, state) {
    var cityString = encodeURIComponent(city).toString();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            x = getListOfLocations(this.responseText);
            document.getElementById("demo").innerHTML = x;
        }
    };
    xhttp.open("GET", "http://www.redcrossblood.org/give/drive/driveSearchList.jsp?city=" + city + "&state=" + state + "&sd=10/15/2017&ed=10/28/2017&dt=WB:DR:PL&&_requestid=271494#", true);
    xhttp.send();
}


function getListOfLocations(rawResponse)
{
    var driveList= JSON.parse(rawResponse.split('var driveData = ')[1].split(';')[0].replace(/\n/g, "").replace('},										 ]', '}]')).driveList;
    var returnVal = "";

    for(currentVal in driveList)
    {
        returnVal = returnVal + JSON.stringify(driveList[currentVal].driveName) + "<br/>";
    }

    return returnVal;
}

function postNewBloodDonation(date, location, userID)
{
    $.post("localhost:3700/bloodDonations",
    {
        "bloodDonation" : {
            "date" : date,
            "location": location,
            "user": userID
	    }
    }, function(data, status) {
    });
}

function postNewBloodDonation2()
{
    fetch('localhost:3700/bloodDonations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:{
            "bloodDonation" : {
                "date" : date,
                "location": location,
                "user": userID
            }
        }
    });
}