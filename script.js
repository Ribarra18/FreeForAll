document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.getElementById("myButton");

  myButton.addEventListener("click", showAlert);
  // adding this shit makes the alert appear when el button esta clicked
  function showAlert() {
    alert("Hello Wor...DALE!");
  }
});
