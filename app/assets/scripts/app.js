//MOBILE MENU
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

//REVEAL-ON-SCROLL

//ES6
// class RevealOnScroll {
// 	constructor(els, offset) {
// 		this.itemsToReveal = els;
// 		this.offsetPercentage = offset;
// 		this.hideInititally();
// 		this.createWaypoints();
// 	}

// 	hideInititally() {
// 		this.itemsToReveal.addClass("reveal-item");
// 	}

// 	createWaypoints() {
// 		var that = this;  //below this code, "this" points to different locations so delcate it first
// 		this.itemsToReveal.each(function(){ 
// 			var currentItem = this;
// 			new Waypoint({
// 				element: currentItem,
// 				handler: function() {
// 					$(currentItem).addClass("reveal-item--is-visible");
// 				},
// 				offset: that.offsetPercentage
// 			});
// 		});
// 	}
// }

//ES5
function RevealOnScroll(els, offset) {
	this.itemsToReveal = els;
	this.hideInititally = function() {
		this.itemsToReveal.addClass("reveal-item");
	}
	this.createWaypoints = function() {
		this.itemsToReveal.each(function(){ 
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: offset
			});
		});
	}

	this.hideInititally();
	this.createWaypoints();

}

var revealOnScrollFeatureItems = new RevealOnScroll($(".feature-item"), "80%");
var revealOnScrollTestimonials = new RevealOnScroll($(".testimonial"), "60%");




