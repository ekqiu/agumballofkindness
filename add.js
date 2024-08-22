let domain = "https://agumballofkindness.vercel.app:3000";

document.getElementById("add-gumball-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("add-button").disabled = true;
  setTimeout(() => {
    document.getElementById("add-button").disabled = false;
  }, 3000);
  let message = document.getElementById("message").value;
  let color = document.getElementById("color-input").value; // Get the selected color

  fetch(`${domain}/add-gumball`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, color }), // Include the selected color in the request body
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("add-button").textContent = `Gumball Added ✅`;
        document.getElementById("add-button").style.backgroundColor = "green";
        document.getElementById("message").value = "";
        document.getElementById("color-input").value = "#ff6f61";
        document.getElementById("gumball").style.backgroundColor = "#ff6f61";
        setTimeout(() => {
          document.getElementById("add-button").textContent = "Add Gumball";
          document.getElementById("add-button").style.backgroundColor =
            "#ff6f61";
        }, 3000);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

});

document.getElementById("color-input").addEventListener("change", (e) => {
  let color = e.target.value;
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("set-red").addEventListener("click", () => {
  let color = "#ff4c3b";
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("set-orange").addEventListener("click", () => {
  let color = "#feb47b";
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("set-yellow").addEventListener("click", () => {
  let color = "#ffed6f";
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("set-green").addEventListener("click", () => {
  let color = "#a8e063";
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("set-blue").addEventListener("click", () => {
  let color = "#6d9eeb";
  document.getElementById("gumball").style.backgroundColor = color;
});

document.getElementById("color-input").addEventListener("change", function () {
  document.getElementById("custom-picker").style.backgroundColor = this.value;
});
