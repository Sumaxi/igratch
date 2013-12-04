ContactsFS.allow({
  insert: function(userId, file) { return userId && file.owner === userId; },
  update: function(userId, file, fields, modifier) {
    return userId && file.owner === userId;
  },
  remove: function(userId, file) { return false; }
});

if (Meteor.isServer) {
	var handler ({
		"default1": function (options) {
			console.log(options.destination());
			return {
				blob: options.blog,
				fileRecord: options.fileRecord,
				destination: options.destination(),
		   };
		}
	});
	
}