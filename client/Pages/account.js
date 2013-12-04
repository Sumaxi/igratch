if (Meteor.isClient) {
	Template.account.account = function () {
		return Meteor.userId();
	};
	
	Template.sign_in.events ({
		"click input[name='submit_in']" : function (event) {
			event.preventDefault();
			var username = $("input[name='username_in']").val();
			var pass = $("input[name='userpass_in']").val();
			Meteor.loginWithPassword(username,pass, function (err) {
				if (err) {
					console.log("Error: Your username and password are incorrect."+username+"  "+pass);
				}
			});
		}
	});
	
	Template.sign_up.events ({
		"click input[name='submit_up']" : function (event) {
			event.preventDefault();
			var username = $("input[name='username_up']").val();
			var pass = $("input[name='userpass_up']").val();
			var pass_confirm = $("input[name='userpass_up_confirm']").val();
			if (pass == pass_confirm && username && pass && pass_confirm) {
				Accounts.createUser({"username":username, "password" : pass}, function (err) {
					if (err) {
						console.log("Error username "+username+" pass "+pass+"passconfirm"+pass_confirm);
					}
					else {
						console.log("Works username "+username+" pass "+pass+"passconfirm"+pass_confirm);
					}
				});
			}
		}
	});
	
	Template.sign_out.events ({
		"click input[name='submit_out']" : function (event) {
			event.preventDefault();
			return Meteor.logout();
		}
	});
	
	Template.notifications.notification = function () {
		var username = Meteor.user().username;
		return Notifications.find({"username":username});
	};
	
	Template.messager.events ({
		"click input[name='messager_submit']" : function (event) {
			event.preventDefault();
			var target = $("input[name='messager_target']").val();
			var title = $("input[name='messager_title']").val();
			var message = $("textarea[name='messager_message']").val();
			var author = Meteor.user().username;
			var id = Meteor.users.findOne({"username":target})._id;
			if (title && message && author && id) {
				console.log("worked");
				return Notifications.insert({'title':title,'message':message,'author':author,"username":target});
			}
		}
	});
	
};
