onload = () => {
    const c = setTimeout(() => {
        document.querySelectorAll("div").forEach(div => {
            div.classList.remove("not-loaded");
        });
        clearTimeout(c);
    }, 1000);
};