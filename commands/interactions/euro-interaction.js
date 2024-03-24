module.exports = [
    {
      name: "euro",
      type: "interaction",
      prototype: "button",
      code: `
      $interactionReply[;{newEmbed:{author:$userDisplayName[$clientID]︲Euro Görüntüleme:$userAvatar[$clientID]}{description:Euro şuanda **$jsonRequest[https://tilki.dev/api/euro;euro;ERROR]** Türk Lirası. Diğer bilgilere ulaşmak istersen tekrar komutu kullanabilirsin. <t:$jsonRequest[https://tilki.dev/api/dolar;zaman;ERROR]:R> güncellendi.}{color:20c236}{footer:©️︲HamsterMert 2024}};;;everyone;true;false]
    `
    },
  ];