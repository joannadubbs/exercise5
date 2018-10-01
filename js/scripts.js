/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];

//initialize a variable for the HTML content you're going to build
var html = '';
var i, j;
//get the empty table content area
var tableContent = document.getElementById('table-content');
var rows = ['first', 'last', 'position', 'year'];

function buildTable(){
  //start with the table header
  html += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  /*Now write a for loop to populate the table using the data
  /include logic to make the text bold when the player is a senior.
  Write the loop here*/
  for(i = 0; i < players.length; i++){
      html += '<tr><td>'+ players[i]'</td>'
            + '<td>'+ players[i]'</td>'
            + '<td>'+ players[i]'</td>'
            + '<td>'+ players[i]'</td>';
            html +='</tr>'

      if (players[i][3] == 'Senior'){
        elt.style.cssText = "color: blue; border: 1px solid black";
      }
      return html;
    }

    /* for(i=0, i<array.players; i++){
        var tr = table.insertRow();

        for(j=0, j<4; j++){
          var td = tr.insertCell();
        }

      }*/

      /*Now, outside of the for loop, but still inside the entire buildTable function,
       use the tableContent and html variables to display the results in the empty tableArea */




  }

buildTable ();

/*var h = "<!DOCTYPE html><html><head><title>Exercise 5: Build an HTML Table with JS</title><link rel='stylesheet' href='css/styles.css' type='text/css' /></head><body><h2>Springfield High School 2018 Girls Basketball Team</h2><table id='table-content'>"

var b = buildTable();

var f = "</table><script src='js/scripts.js'></script></body></html>"

document.body.innerHTML = h + b + f;*/



/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];
