document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const urls = ["/team", "/kalender", "/invite", "/esport", "/meiesaavutused"];

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            window.location.href = urls[index];
        });
    });
});
