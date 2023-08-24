const btnEl = document.getElementById("btn");
const nameEl = document.getElementById("name");

const emoji = [];

let fetchEmojiAPI = async(randomNum) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", "loader.svg");
    btnEl.replaceWith(imgEl);
    nameEl.innerText = "updating...";

    let result = await fetch("https://emoji-api.com/emojis?access_key=1b9def043d05aac1b12dfde7486450e8870007bc").then((res)=>res.json());

    // console.log(result);
    for(let i=0;i<1499;i++){
        emoji.push({
            emojiChar:result[i].character,
            emojiName:result[i].unicodeName
        });
    }

    for(let i=1793;i<2694;i++){
        emoji.push({
            emojiChar:result[i].character,
            emojiName:result[i].unicodeName
        });
    }
    // console.log(emoji);
    imgEl.replaceWith(btnEl);
    btnEl.innerText = emoji[randomNum].emojiChar;
    nameEl.innerText = emoji[randomNum].emojiName;
}

// fetchEmojiAPI();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    
    fetchEmojiAPI(randomNum);
});