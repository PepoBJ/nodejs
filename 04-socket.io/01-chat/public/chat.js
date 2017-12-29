(function (d, io) {
	'use strict';

	var io = io();
	var chatForm = d.querySelector('#chat-form');
	var messageText = d.querySelector('#message-text');
	var chat = d.querySelector('#chat');

	chatForm.onsubmit = function (e) {
		e.preventDefault();

		io.emit('new message', messageText.value);
		messageText.value = null;

		return false;
	}

	io.on('new user', function(newUser) {
		alert(newUser.message);
	});

	io.on('user says', function(userSays) {
		chat.insertAdjacentHTML('beforeend', '<li>' + userSays + '</li>');
	});

	io.on('bye user', function(byeUser) {
		alert(byeUser.message);
	});
})(document, io);