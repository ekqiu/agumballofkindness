let domain = "http://localhost:3000";

document
  .getElementById("random-gumball-button")
  .addEventListener("click", () => {
    fetch(`${domain}/random-gumball`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("gumball").innerText = `Message: ${data.message}`;
        document.getElementById("gumball").style.backgroundColor = data.color;
      });
  });