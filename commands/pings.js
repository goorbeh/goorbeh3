const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "ping",
    description: "برای نمایش پینگ",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
        await interaction.editReply({ content: "در حال دریافت اطلاعات..." }).then(async () => {
            const ping = Date.now() - interaction.createdAt;
            const api_ping = client.ws.ping;

            await interaction.editReply({
                content: "`🏓`",
                embeds: [new MessageEmbed().setAuthor(`Pong Piano`, client.user.displayAvatarURL({ dynamic: true })).setColor(client.embedColor).setFooter(` ${interaction.member.user.username}`, interaction.member.user.displayAvatarURL({ dynamic: true })).addFields([{ name: " سرعت پاسخ :", value: `\`\`\`ini\n  ${ping}ms  \n\`\`\``, inline: true }, { name: "سرعت api :", value: `\`\`\`ini\n  ${api_ping}ms \n\`\`\``, inline: true }]).setTimestamp()]
            });
        })
    }
}
