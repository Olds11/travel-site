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


//STICKY HEADER

//ES6 
// class StickyHeader {
// 	constructor() {
// 		this.siteHeader = $(".site-header");
// 		this.headerTriggerElement = $(".large-hero__title");
// 		this.createHeaderWaypoint();
// 		this.pageSections = $(".page-section");
// 		this.headerLinks = $(".primary-nav a");
// 		this.createPageSectionWaypoints();
// 	}

// 	createHeaderWaypoint() {
// 		var that = this;
// 		new Waypoint({
// 			element: this.headerTriggerElement[0], //points to the native DOM element
// 			handler: function(direction) {
				
// 				if (direction == "down") {
// 					that.siteHeader.addClass("site-header--dark");
// 				} else {
// 					that.siteHeader.removeClass("site-header--dark");
// 				}
// 			}
// 		});
// 	}

// 	createPageSectionWaypoints() {
// 		var that = this;
// 		this.pageSections.each(function(){
// 			var currentPageSection = this;
// 			new Waypoint({
// 				element: currentPageSection,
// 				handler: function() {
// 					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
// 					that.headerLinks.removeClass("is-current-link");
// 					$(matchingHeaderLink).addClass("is-current-link");
// 				}

// 			}); 
// 		});
// 	}

// }

//ES5 

function StickyHeader() {
	this.siteHeader = $(".site-header");
	this.headerTriggerElement = $(".large-hero__title");
	this.pageSections = $(".page-section");
	this.headerLinks = $(".primary-nav a");
	this.createHeaderWaypoint = function() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0], //points to the native DOM element
			handler: function(direction) {
				
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");

				}
			}
		});
	}
	this.createPageSectionWaypoints = function() {
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 
				},
				offset: "18%"

			}); 
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 
				},
				offset: "-50%"

			}); 
		});
	}

	this.resetPageSectionWaypoints = function() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
               if (direction == "up") {
                   that.headerLinks.removeClass("is-current-link");
               }
            },
            offset: "-30%"
        });
    }


	this.createHeaderWaypoint();
	this.createPageSectionWaypoints();
	this.resetPageSectionWaypoints();
}

var stickyHeader = new StickyHeader();
















