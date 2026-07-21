let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment() {
    count++
    countEl.innerText = count
}

function save() {
    let previousEntries = count + " - "
    saveEl.textContent += previousEntries
    console.log(count)
}
