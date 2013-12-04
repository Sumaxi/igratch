if (Meteor.isClient) {
	Template.index.game = function () {
		return Games.find();	
	}
}
