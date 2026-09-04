console.log ("Connected!");

const profileContainer = document.getElementById("profile-container");

const profileCard = document.createElement("div");
profileCard.classList.add("profile-card");

const name = document.createElement("h2");
name.textContent = "RIlen Nicole H. Agustin";

const bio = document.createElement("p");
bio.textContent = "I am a BSIS student who enjoy learning new things.";

const avatar = document.createElement("img");
avatar.src = "avatar.png";
avatar.alt = "My Avatar";
avatar.classList.add("avatar");

profileCard.appendChild(avatar);
profileCard.appendChild(name);
profileCard.appendChild(bio);

profileContainer.appendChild(profileCard);