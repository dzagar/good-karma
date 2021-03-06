import $ from 'jquery';

export const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
]

export function GetRedCrossLocations(city, state, self, cb) {
    var cityString = encodeURIComponent(city).toString();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            cb(self, getListOfLocations(this.responseText));
        }
    };
    xhttp.open("GET", "http://www.redcrossblood.org/give/drive/driveSearchList.jsp?city=" + cityString + "&state=" + state + "&sd=10/15/2017&ed=10/28/2017&dt=WB:DR:PL&&_requestid=271494#", true);
    xhttp.send();
}


function getListOfLocations(rawResponse)
{
    var driveList= JSON.parse(rawResponse.split('var driveData = ')[1].split(';')[0].replace(/\n/g, "").replace('},										 ]', '}]')).driveList;
    return driveList;
    var returnVal = [];

    for(var currentVal in driveList)
    {
        returnVal[currentVal] = JSON.stringify(driveList[currentVal].siteName).split("<br>").join(" ").split('"').join(" ");

        if (driveList[currentVal].siteLine1)
        {
            returnVal[currentVal] = returnVal[currentVal] + JSON.stringify(driveList[currentVal].siteLine1).split("<br>").join("").split('"').join("");
        }
        
        if (driveList[currentVal].siteLine2)
        {
            returnVal[currentVal] = returnVal[currentVal] + JSON.stringify(driveList[currentVal].siteLine2).split("<br>").join("").split('"').join("");
        }
    }

    return returnVal;
}

export function postNewBloodDonation(date, location, userID)
{
    $.ajax({
        url : "http://localhost:3700/bloodDonations",
        type: "POST",
        data: JSON.stringify(
            {
                "bloodDonation" : {
                    "date" : date,
                    "location": location,
                    "user": userID
                }
            }
        ),
        contentType: "application/json; charset=utf-8",
        dataType   : "json"
    });
}