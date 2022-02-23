let username = document.getElementById("username");
let aboutMe = document.getElementById("aboutme");
let button = document.getElementById("editProfile");
let save = document.getElementById("save");

$('#editProfile').click(() => {

    button.style.display = "none";
    save.style.display = "block";

    let currentUsername = username.innerText;
    let currentAboutMe = aboutMe.innerText;

    username.innerHTML = `<input type="text" id="newUsername">`
    aboutMe.innerHTML = `<input type="text" id="newAboutMe">`

    document.querySelector("#newUsername").value = currentUsername;
    document.querySelector("#newAboutMe").value = currentAboutMe;

})

$('#save').click(() => {

    button.style.display = "block";
    save.style.display = "none";
    let newUsername = document.querySelector("#newUsername").value;
    let newAboutMe = document.querySelector("#newAboutMe").value;

    username.innerHTML = `<h4>${newUsername}</h4>`;
    aboutMe.innerHTML = `<p>${newAboutMe}</p>`;
})