const sideBarMenu = document.querySelector(".side-bar__wrapper");

let menuItemActive;

sideBarMenu.addEventListener("click", (e) => {
	if (e.target.tagName != "A") return;
	target = e.target.closest(".menu__item");
	menuItemActive && menuItemActive.classList.remove("active");
	menuItemActive = target;
	target.classList.add("active");
});
