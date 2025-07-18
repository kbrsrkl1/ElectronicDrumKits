
const kits = ["crush", "kick", "snare", "tom"]

const containerEl = document.querySelector(".container")

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn")
    btnEl.innerText = kit
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)"
    containerEl.appendChild(btnEl)
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3"
    containerEl.appendChild(audioEl)
    btnEl.addEventListener("click", () => {
        audioEl.play();
    })
})