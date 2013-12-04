if (Meteor.isClient) {
	Template.review.review = function () {
		return Reviews.find();	
	}
}
