document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const urls = ["/alpsichillikad/team", "/alpsichillikad/kalender", "/alpsichillikad/invite", "/alpsichillikad/esport", "/alpsichillikad/meiesaavutused"];

    button.addEventListener("click", function () {
        window.location.href = window.location.origin + urls[index];
    });
});
