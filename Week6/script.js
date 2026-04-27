let output = document.getElementById("output");

document.getElementById("greetings").addEventListener("click", function (event) {
    console.log(event);
    output.innerHTML =
      "Hello.";
  });

document.getElementById("colorRed").addEventListener("click", function (event) {
    console.log(event);
    output.style.color = "red";
  });

document.getElementById("colorBlue").addEventListener("click", function (event) {
    console.log(event);
    output.style.color = "blue";
  });

document.getElementById("fontArial").addEventListener("click", function (event) {
    console.log(event);
    output.style.fontFamily = "Arial, sans-serif";
  });

document.getElementById("fontTimes").addEventListener("click", function (event) {
    console.log(event);
    output.style.fontFamily = "Times New Roman";
  });

document.getElementById("textBackgroundRed").addEventListener("click", function (event) {
    console.log(event);
    output.style.backgroundColor = "red";
  });

document.getElementById("textBackgroundBlue").addEventListener("click", function (event) {
    console.log(event);
    output.style.backgroundColor = "blue";
  });

document.getElementById("backgroundRed").addEventListener("click", function (event) {
    console.log(event);
    whole.style.backgroundColor = "red";
  });

document.getElementById("backgroundBlue").addEventListener("click", function (event) {
    console.log(event);
    whole.style.backgroundColor = "blue";
  });