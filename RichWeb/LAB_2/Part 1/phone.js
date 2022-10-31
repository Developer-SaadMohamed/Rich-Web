//function to error check the entries 
function validateForm() {
  let namey = document.forms["myForm"]["Name"].value;
  if (namey == "" || namey.length > 20) {
    alert("Name must be filled out\nName is 20 Characters max");
    return false;
  }

  let phoney = document.forms["myForm"]["mobile"].value;
  if (phoney == "" || phoney.length != 10)  {
    alert("Phone must be filled out\nPhone must be 10 numbers");
    return false;
  }
  
  let emaily = document.forms["myForm"]["email"].value;
  if (emaily == "") {
    alert("Email must be filled out");
    return false;
  }
  
  
}

function addContact(){
    let name = document.getElementById("name").innerHTML
    let mobile = document.getElementById("mobile").innerHTML
    let email = document.getElementById("email").innerHTML

    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)

    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = document.getElementById("mobile").value; 
    cell3.innerHTML = document.getElementById("email").value;
}


// function to serch for phone number 
function myFunction() {
  var input, filter, table, tr, td, i, txtValue, texting;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        texting = "";
        newtextArea.innerHTML=texting;
      } else {
        tr[i].style.display = "none";
        let newtextArea = document.getElementById("noResult");
        texting = "Mobile Not Found";
        newtextArea.innerHTML=texting;

      }
    }
  }
  texting = "";
  newtextArea.innerHTML=texting
}


// function to sort names by ascending or descending order
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      switchcount ++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}