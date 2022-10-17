let text = document.querySelector("h1");

let inner_text = "Saiful Islam Nafees";

indexNum = 0;

setInterval(fun, 100);

function fun() {
    text.innerHTML = inner_text.slice(0, indexNum++);

    if (indexNum > inner_text.length) {
        indexNum = 0;
    }
}
