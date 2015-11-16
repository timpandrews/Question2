

function init() {

    //alert("hello")
    var i = 1;
    var maxIterations = 15; //******** Set to 100 when done ********

    var randomNumberArray = []
    var averageArray = []

    var repeater = setInterval(function () {
        if (i <= maxIterations) {
            //alert(i)

            randomNumber = getRandomNumber()
            //alert(randomNumber)

            randomNumberArray.push(randomNumber)
            //alert(randomNumberArray)

            buildTable(randomNumberArray)

            i++;
        } else {
            //alert("done")
            clearInterval(repeater);
        }
    }, 1000);

}

function getRandomNumber() {

    var randomNumber = Math.floor(Math.random() * 10) + 1

    //alert(randomNumber)

    return randomNumber;

}

function buildTable(randomNumberArray) {

    //alert(randomNumberArray)
    var arrayLength = randomNumberArray.length
    //alert(arrayLength)
    

    var html = "<table id='resultsTable'>"
    html+=          "<thead>"
    html+=              "<tr>"
    html+=                  "<th>Random Number</th>"
    html+=                  "<th>EMA</th>"
    html+=              "</tr>"
    html+=          "</thead>"
    html+=          "<tbody>"

    for (x = 0 ; x < arrayLength; x++) {

        //alert(x)
        html+=      "<tr>"
        html+=          "<td>" + randomNumberArray[x] +"</td>"
        html+=          "<td>"+ x + "</td>"
        html+=      "</tr>"

    }

    html+=          "</tbody>"
    html+=      "</table>"

    var body = document.getElementsByTagName("body")[0];

    //alert(html)
    body.innerHTML = html 

}