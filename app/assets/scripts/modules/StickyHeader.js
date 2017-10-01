import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint(this.headerTriggerElement);
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createSectionWaypoints(this.headerLinks);
		this.addSmoothScrolling();
	}
	
	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}
	
	createHeaderWaypoint(trigger) {
		var obj = this;
		new Waypoint({
			element: trigger[0],
			handler: function(direction) {
				if(direction == "down") {
					obj.siteHeader.addClass("site-header--dark");
				} else {
					obj.siteHeader.removeClass("site-header--dark");
					obj.headerLinks.removeClass("is-current-link");
				}
			}
		});
	}
	
	createSectionWaypoints(headerLinks) {
		
		this.pageSections.each(function() {
			var currentItem = this;
			
			new Waypoint({
				element: currentItem,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentItem.getAttribute("data-matching-link");
						headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "20%"
			});
			
			new Waypoint({
				element: currentItem,
				handler: function(direction) {
					if (direction == "up") {
						console.log("up");
						var matchingHeaderLink = currentItem.getAttribute("data-matching-link");
						headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-50%"
			});
		});
	}
	
}

export default StickyHeader;