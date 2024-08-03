const guias = require('../commands/utility/guias.json');

module.exports = {
    handleSelectMenu: async (interaction) => {
        const selectedValue = interaction.values[0];
        const guide = guias[selectedValue];

        if (guide) {
            await interaction.reply(`Aqui está a documentação do ${guide.label}: ${guide.url}`);
        } else {
            await interaction.reply('Guia não encontrado!');
        }
    }
};
