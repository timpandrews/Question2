

function init() {

    alert("hello")
    var i = 1;
    var maxIterations = 5; //******** Set to 100 when done ********

    var randomNumberArray = []
    var averageArray = []

    var repeater = setInterval(function () {
        if (i <= maxIterations) {
            alert(i)

            randomNumber = getRandomNumber()
            alert(randomNumber)

            randomNumberArray.push(randomNumber)
            alert(randomNumberArray)

            i++;
        } else {
            alert("done")
            clearInterval(repeater);
        }
    }, 1000);

}

function getRandomNumber() {

    var randomNumber = Math.floor(Math.random() * 10) + 1

    //alert(randomNumber)

    return randomNumber;

}

function addRow() {

    //alert("hello")

    html = "<tr><td>5</td><td>5</td></tr>"

    $("#resultsTable").append(row);

}

function createTable() {

    //alert("hello")

    var html = "<table id='resultsTable'><thead><tr><th>Random Number</th><th>EMA</th></tr></thead><tbody></tbody></table>"

    var body = document.getElementsByTagName("body")[0];

    body.innerHTML+= html

    /*

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // cells creation

        var row = document.createElement("tr");

        // create element <td> and text node 
        //Make text node the contents of <td> element
        // put <td> at end of the table row
        var cell1 = document.createElement("td");    
        var cellText1 = document.createTextNode("Random Number");

        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode("EMA");

        cell1.appendChild(cellText1);
        cell2.appendChild(cellText2);
        row.appendChild(cell1,cell2);

        //row added to end of table body
        tblBody.appendChild(row);
        

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute("border", "2"); */

}