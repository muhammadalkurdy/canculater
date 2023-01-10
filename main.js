let answerEl = document.querySelector("#javob");

answerEl.addEventListener("click", () => {
        let inp1 = parseInt(document.querySelector("#inp1").value)
        let inp2 = parseInt(document.querySelector("#inp2").value)
        let p = document.querySelector("#p");
        let m = document.querySelector("#m");
        let u = document.querySelector("#u");
        let r = document.querySelector("#r");

        if (p.checked) {
            answerEl.innerHTML = inp1 + inp2 
        }
        if (m.checked) {
            let min = inp1 - inp2
            answerEl.innerHTML = "Javob: <b>" + min + "</b>"
        }
        if (u.checked) {
            answerEl.innerHTML = "Javob: <b>" + inp1 * inp2 + "</b>"
        }
        if (r.checked) {
            answerEl.innerHTML = "Javob: <b>" + inp1 / inp2 + "</b>"
        }

        console.log(inp1);
    })