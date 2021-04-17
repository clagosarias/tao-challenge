'use strict'
const liveServer = require("live-server");

const params = {
	root: "./public/",
	open: true,
	ignore: 'styles',
};

liveServer.start(params);