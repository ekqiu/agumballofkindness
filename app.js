document.getElementById("add-gumball-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let message = document.getElementById("message").value;
  fetch("http://localhost:3000/add-gumball", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
});

document
  .getElementById("random-gumball-button")
  .addEventListener("click", () => {
    fetch("http://localhost:3000/random-gumball")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "gumball-display"
        ).innerText = `Message: ${data.gumball}`;
      });
  });
