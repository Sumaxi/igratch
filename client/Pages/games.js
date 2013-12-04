if (Meteor.isClient) {
	Template.game.game = function () {
		return Games.find();	
	}
}
