'use strict';

var LANGUAGES = ['ro'];

function standard(text, language) {
	var data = require('./data/' + language);

	Object.keys(data).forEach(function(key) {
		text = text.replace(data[key], key);
	});

	return text;
}

module.exports = function(text, language) {
	if (typeof text !== 'string') {
		throw new Error('`text` must be a valid string');
	}
	if (typeof language !== 'string') {
		throw new Error('`language` must be a valid string');
	}
	if (text.trim().length < 1) {
		return text;
	}

	language = language.trim().toLowerCase();

	if (~LANGUAGES[language]) {
		return standard(text, language);
	}

	return text;
};
