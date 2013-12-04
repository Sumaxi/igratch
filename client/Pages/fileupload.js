Template.queueControl.events({
    'change .fileUploader': function (e) {
		e.stopPropagation();
		e.preventDefault();
		var files = e.target.files;
		for (var i = 0, f; f = files[i]; i++) {
			Images.storeFile(f);
		}
    }
});

Template.fileTable.files = function() {
    //show all files that have been published to the client, with most recently uploaded first
    return ContactsFS.find({}, { sort: { uploadDate:-1 } }, { limit:30 });
};

Template.images.images = function () {
	return Images.find();
};