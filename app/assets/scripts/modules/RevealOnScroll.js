import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, offset) {

		this.itemsToReveal = elements;
		this.offsetPercentage = offset;

		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}
	
	createWaypoints() {
		var obj = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: obj.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;
