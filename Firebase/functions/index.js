'use strict';

const functions = require('firebase-functions');

// Import Admin SDK
const admin = require("firebase-admin");

const twilio = require('twilio');
const config = require('./config.json');

const MessagingResponse = twilio.twiml.MessagingResponse;

const projectId = 'que-la-hacks';
const region = 'us-central1';

admin.initializeApp(functions.config().firebase)

exports.reply = functions.https.onRequest((req, res) => {
	let isValid = true;

	// Only validate that requests came from Twilio when the function has been
	// deployed to production.
	if (process.env.NODE_ENV === 'production') {
		isValid = twilio.validateExpressRequest(req, config.TWILIO_AUTH_TOKEN, {
			url: `https://${region}-${projectId}.cloudfunctions.net/reply`
		});
	}

	// Halt early if the request was not sent from Twilio
	if (!isValid) {
		res
			.type('text/plain')
			.status(403)
			.send('Twilio Request Validation Failed.')
			.end();
		return;
	}

	// Get a database reference to our blog
	const db = admin.database();
	const ref = db.ref("/");

	const data = req.body.Body;
	const parts = data.split('|')

	const group = parts[0];
	const request = parts[1];

	ref.child(group).push().set({
		query: request,
	});

	// Prepare a response to the SMS message
	const response = new MessagingResponse();

	// Add text to the response
	response.message('Added!');

	// Send the response
	res
		.status(200)
		.type('text/xml')
		.end(response.toString());
});

exports.pop_queue = functions.https.onRequest((req, res) => {
	// Get a database reference to our blog

	const group = req.body.group;
	const queueId = req.body.queue_id;

	ref.child(group).update({
		[queueId]: null,
	});

	// Send the response
	res
		.status(200)
		.type('text/xml')
		.end('Successfully deleted');
});
