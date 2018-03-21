//mobile menu
//ES6
// class MobileMenu {
// 	constructor() {
// 		this.menuIcon = $(".site-header__menu-icon");
// 		this.menuContent = $(".site-header__menu-content");
// 		this.siteHeader = $(".site-header");
// 		this.events();
// 	}

// 	events() {
// 		this.menuIcon.click(this.toggleTheMenu.bind(this));
// 	}

// 	toggleTheMenu() {
// 		this.menuContent.toggleClass("site-header__menu-content--is-visible");
// 		this.siteHeader.toggleClass("site-header--is-expanded");
// 		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
// 	}
// }


//ES5
function MobileMenu() {
	this.menuIcon = $(".site-header__menu-icon");
	this.menuContent = $(".site-header__menu-content");
	this.siteHeader = $(".site-header");
	this.events = function() {
		this.menuIcon.click(this.toggleTheMenu.bind(this)); //needed bind because "this" is set to "this.menuIcon" because function called within function	
	};
	this.toggleTheMenu = function() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");

	};
	this.events();

	 
}

var mobileMenu = new MobileMenu();