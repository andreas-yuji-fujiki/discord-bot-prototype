const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Use para checar se o BOT está bem!'),
	async execute(interaction) {
		await interaction.reply('Eu estou viva, PORRA!');
	},
};