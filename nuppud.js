document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const urls = ["/team", "/kalender", "/invite", "/esport", "/meiesaavutused"];

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
            window.location.href = basePath + urls[index];
        });
    });
});
