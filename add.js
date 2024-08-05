let domain = "http://localhost:3000";

document.getElementById("add-gumball-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let message = document.getElementById("message").value;
  let color = document.getElementById("color-input").value; // Get the selected color
  fetch(`${domain}/add-gumball`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, color }), // Include the selected color in the request body
  });
});

document.getElementById("color-input").addEventListener("change", (e) => {
  let color = e.target.value;
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("color-input").addEventListener("change", function () {
  document.getElementById("custom-picker").style.backgroundColor = this.value;
});
