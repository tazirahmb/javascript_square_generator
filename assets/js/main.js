var n, nBaris, result;

function makePyramid() {
  n = 1;
  nBaris = document.getElementById("nBaris").value;
  // document.getElementById("result").innerHTML = " ";
  result = "";
  while(n <= nBaris) {
    result += "<tr>";
    for(var i = 1; i <= nBaris; i++) {
      result += "<td>" + 0 + "</td>";
    }
    result += "</tr>";
    n++;
  }
  document.getElementById("result").innerHTML = result;
}