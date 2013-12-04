if (Meteor.isClient) {
	Template.comments.comments = function () {
		var id = Session.get("id");
		return Comments.find({"id":id},{sort:{date: 1}});
	}
	
	Template.commentator.user = function () {
		return Meteor.user();	
	}
	
	Template.commentator.events ({
		"click input[name='commentator_submit']":function(event) {
			event.preventDefault();
			var name = $("input[name='commentator_name']").val();
			var comment = $("textarea[name='commentator_comment']").val();
			var id = Session.get("id");
			console.log(this);
			if (name && comment)
				Comments.insert({"name":name,"comment":comment,"id":id});
			var object = Games.findOne({_id:id})|| Reviews.findOne({_id:id});
			Notifications.insert({"author":name,"comment":comment,"username":object.author,"title":object.title});
		}
	})
}