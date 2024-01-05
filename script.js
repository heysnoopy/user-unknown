let currentIndex = 0;
const buttons = document.querySelectorAll('.button');

for (let i = 1; i < buttons.length; i++) {
  buttons[i].style.display = 'none';
}

function getRandom() {
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);
    return `translate(${randomX}vw, ${randomY}vh)`;
}

function applyRandomTranslation() {
    const buttonContainer = document.getElementById('button-container');
    const randomTranslation = getRandom();
    buttonContainer.style.transform = randomTranslation;
}

function showNext() {
    buttons[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % buttons.length;
    buttons[currentIndex].style.display = 'block';
        applyRandomTranslation();
}

function video() {
    document.body.innerHTML = `
    <div>
        <video width="360px" height="720px" controls autoplay>
        <source src="saachi.m4v" type="video/mp4">Your browser does not support the video tag.
        </video>
    </div>
    <p class="message">Hemlooo Saachi,<br>
    Happiessttt Birthdayyy yaarrr, nineteen years damnnn. First of all, congratulations on making yet another year 😌🥳. You achieved success in many different ways, learnt alot, became a valedictorian, and got me as a bestfriend 🤭. But srsly, I’m veryyyy proud, oh wait, powder of youu 😉 for everything you’ve accomplished 👀🫶🏻.<br>And ukw, this year too you’re going to do many many crazyy good stuff and I know it 🙈. It’s all lined up by the fate of the universe. To be really honest, I don’t know what to say to you, I’ve already said everything so many times in so many notes 🥲.<br>I’m so glad that even after our school finished, here we are, almost 10 months later and we still share everything 🥹. But as they say, there is going to be a time when we stop talking and yes it is going to be hard 🥺, but…life’s hard 😭. You just have to accept and go on 🫠. But this said, I really hope we stay friends for reallyyy longgg longgg timeeee 🖇️♾️. Don’t you ever forget to text me, call me or even video call me! 🥹<br>I have said it a million times and yet I’ll say it again, <b>You’re the “best” friend I’ve met.</b> Thank you so much for being by my side, through laughter and sadness. Thank you so much for your contribution in evolving me 😶‍🌫️☺️.<br>Ik you think I’m a “studious” person, but believe me I’m as messed up, “timepass” & lazyyy person that I can’t even explain 🥲😂. This year has given me perspective on what things are important in life and sure one of them is the people you meet in your life, most precisely the ones whom you call “bestfriend”. I’m truly grateful for all the moments we have had, all the late night texts, all the “ukw happened” stuff, everything you can imagine 😜. Believe me, you’re my go-to person when anything happens with me and it’s really comforting to know that yes there is a person who cares about you so much 😭🫀. And a heartfelt thank you for that, thank you for always caring about me. Ik I’m not easy to deal with yet you never seem to get fed up of me, thank you very much for it 😙💗<br>
    And after 3 years since we actually got to know each other, I can say that <br>“I have the bestfriend with the cutest smile, silliest laugh, tubelight-like mind, prettiest eyes, and the most adorable personality <3” 🥰<br>
    Thank you for being a part of my life and keeping me in yours. Thank you for existing 🤗<br>
    And remember, I’m always here for you, whenever you need a shoulder to lean on, a friend to cry with, and also someone to enjoy with ofc 😊✨🫶🏻<br>
    Enjoyyy your day to the fullest, do everything you want to do, learn that damn car and take me to a ride 😌😆<br>
    Also, I remember you still haven’t sent me an audio of you singing 🙄 so speed up the process and send it fast, I’m waiting for it 💀<br>
    Anyways, this is it I’m not able to think anything else to say, so yea signing off, hope you liked this little surprise I made 🥹✨<br>
    Love youuuu! 🫂❤️<br>
    Aapka Dost,<br>
    Dhamrin 🙈</p>`;

}
