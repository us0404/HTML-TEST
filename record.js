// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction() {
  event.preventDefault();
 
  var name = document.querySelector("#name").value;

  var empid = document.querySelector("#employeeID").value;

  var depart = document.querySelector("#departmen").value;

  var job= document.querySelector("#exp").value;

  var goole = document.querySelector("#email").value;

  console.log( name, empid, depart,job ,goole );

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  var student_avatar = document.createElement("img");
  student_avatar.setAttribute("src", avatar);
  td1.append(student_avatar);

  var td2 = document.createElement("td");
  td2.innerText = name;

  var td3 = document.createElement("td");
  td3.innerText = empid;

  var td4 = document.createElement("td");
  td4.innerText = depart;

  var td5 = document.createElement("td");
  td5.innerText = job;

  var td6 = document.createElement("td");
  td6.innerText = goole;

  
 

  var td9 = document.createElement("td");
  td9.innerText = "Delete";
  td9.style.backgroundColor = "red";
  td9.style.cursor = "pointer";
  td9.addEventListener("click", deleteRow);

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

  document.querySelector("tbody").append(tr);
}

function deleteRow() {
  event.target.parentNode.remove();

  event.target.parentNode.innerHTML = "";
}
