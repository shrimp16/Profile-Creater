let username = document.getElementById("username");
let aboutMe = document.getElementById("aboutme");
let button = document.getElementById("editProfile");
let save = document.getElementById("save");

let userPicChange = document.getElementById("input-user-text");
let userBannerChange = document.getElementById("input-banner-text");
let userPicInput = document.getElementById("user-pic");
let bannerPicInput = document.getElementById("banner-pic");

$('#editProfile').click(() => {

    button.style.display = "none";
    save.style.display = "block";
    userPicChange.style.display = "block";
    userBannerChange.style.display = "block";

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
    userPicChange.style.display = "none";
    userBannerChange.style.display = "none";
    let newUsername = document.querySelector("#newUsername").value;
    let newAboutMe = document.querySelector("#newAboutMe").value;

    username.innerHTML = `<h4>${newUsername}</h4>`;
    aboutMe.innerHTML = `<p>${newAboutMe}</p>`;
})

let uploaded_image;

bannerPicInput.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#banner").src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
});

userPicInput.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      uploaded_image = reader.result;
      document.querySelector("#user").src = uploaded_image;
    });
    reader.readAsDataURL(this.files[0]);
  });

  $("#input-user-text").click(function () {
    $("#user-pic").trigger('click');
});

  $('#input-banner-text').click(() => {
    $('#banner-pic').trigger('click');
  })