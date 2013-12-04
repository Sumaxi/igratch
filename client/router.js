Router.configure({
	layoutTemplate: 'main'
});

Router.map(function () {
	this.route('index',{ path:'/'});
	
	this.route('game',{ path:'/games'});
		
	this.route('review',{ path:'/reviews'});
	
	this.route('account',{ path:'/account'});
	
	this.route('game_item',{path:'/games/:_id',
		data: function () {
			var id = this.params._id;
			Session.set("id",id);
			return Games.findOne({_id: id});
		}
	});
	
	this.route('review_item',{path:'/reviews/:_id',
		data: function () {
			var id = this.params._id;
			Session.set("id",id);
			return Reviews.findOne({_id: id});
		}
	});
});
