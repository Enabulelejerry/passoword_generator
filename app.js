const passwords = ["0", "1", "2", "4", "5", "6", "7", "8", "9", "A", "a", "B", "b", "C", "c", "D",
    "c", "E", "e", "G", "g", "i", "I", "J", "j", "&", "_", "%", "#", "?", "@", "00", "49", "75"
]


const btn = document.getElementById('btn');
const password = document.getElementById('password');


btn.addEventListener('click', function () {
    let major = '';
    for (let i = 0; i < 8; i++) {
        major += passwords[genarate()]
        console.log(major);
    }

    password.innerHTML = major;

})









function genarate() {
    return Math.floor(Math.random() * passwords.length);
}