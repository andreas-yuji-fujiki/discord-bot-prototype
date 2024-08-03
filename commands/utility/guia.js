const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const guias = require('../utility/guias.json');

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('selectGuia')
            .setPlaceholder('Nenhum guia selecionado...')
            .addOptions(
                Object.keys(guias).map(key => ({
                    label: guias[key].label,
                    description: guias[key].description,
                    value: key
                }))
            )
    );

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guias')
        .setDescription('Acesse o guia da tecnologia que precisar!'),
    async execute(interaction) {
        await interaction.reply({ content: 'Selecione um dos guias abaixo:', components: [row] });
    }
};
