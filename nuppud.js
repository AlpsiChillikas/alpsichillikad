document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const urls = ["/team", "/kalender", "/invite", "/esport", "/meiesaavutused"];

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const basePath = window.location.pathname.split("/").slice(0, 2).join("/");
            window.location.href = window.location.origin + basePath + urls[index];
        });
    });
});
