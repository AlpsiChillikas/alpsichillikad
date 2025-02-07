document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const urls = ["/alpsichillikad/team", "/alpsichillikad/kalender", "/alpsichillikad/invite", "/alpsichillikad/esport", "/alpsichillikad/meiesaavutused"];

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            window.location.href = urls[index];
        });
    });
});
