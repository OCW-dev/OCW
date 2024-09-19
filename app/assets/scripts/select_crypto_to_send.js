document.addEventListener("DOMContentLoaded", () => {
  const back = document.getElementById("back-button");
  const token = document.getElementById("token");

  back.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  token.addEventListener("click", function () {
    window.location.href = "receive_address.html";
  });
});
