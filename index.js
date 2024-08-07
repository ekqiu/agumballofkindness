let domain = "http://localhost:3000";

document
  .getElementById("random-gumball-button")
  .addEventListener("click", () => {
    document.getElementById("random-gumball-button").disabled = true;
    setTimeout(() => {
      document.getElementById("random-gumball-button").disabled = false;
    }, 3000);
    fetch(`${domain}/random-gumball`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("gumball").innerText = `${data.message}`;
        document.getElementById("gumball").style.backgroundColor = data.color;
      })
      .then(() => {
        document.getElementById(
          "random-gumball-button"
        ).textContent = `Here's a gumball! ✅`;
        document.getElementById("random-gumball-button").style.backgroundColor =
          "green";
        setTimeout(() => {
          document.getElementById("random-gumball-button").textContent =
            "Get Random Gumball";
          document.getElementById(
            "random-gumball-button"
          ).style.backgroundColor = "#ff6f61";
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  document
    .getElementById("random-gumball-button")
    .addEventListener("click", () => {
      const gumballElement = document.getElementById("gumball");

      gumballElement.classList.remove("dispense");

      void gumballElement.offsetWidth;

      gumballElement.classList.add("dispense");

      const messages = ["😊", "🍬", "🎉", "💖", "🌟"];
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      setTimeout(() => {
        gumballElement.textContent = randomMessage;
      }, 2000);
    });