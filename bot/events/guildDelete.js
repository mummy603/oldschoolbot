const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args);
		this.enabled = this.client.production;
	}

	run({ name, memberCount }) {
		this.client.channels.get(this.client.guildLogs)
			.send(`\`${name}\` with \`${memberCount.toLocaleString()}\` Members removed.`);
	}

};
