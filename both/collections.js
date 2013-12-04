Posts = new Meteor.Collection('posts');
Games = new Meteor.Collection('games');
Reviews = new Meteor.Collection('reviews');
Comments = new Meteor.Collection('comments');
Notifications = new Meteor.Collection('notifications');
Contacts = new Meteor.Collection('contacts');
ContactsFS = new CollectionFS('contacts', { autopublish: false });
Images = new CollectionFS('images');