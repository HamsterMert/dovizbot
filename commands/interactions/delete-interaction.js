module.exports = [
    {
      type: "interaction",
      prototype: "button",
      code: `
      $deleteCommand
      $onlyIf[$get[sahip]==$interactionData[author.id];{
        "content" : "Bu Butonu <@!$get[sahip]> Kullanabilir!",
        "ephemeral" : true,
        "options" : { "interaction" : true }
        }]
        
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==delete;]
        $let[sahip;$advancedTextSplit[$interactionData[customId];_;2]]
    `
    },
  ];