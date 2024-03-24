module.exports = [
    {
      name: "dolar",
      type: "interaction",
      prototype: "button",
      code: `
      $interactionReply[;{newEmbed:{author:$userDisplayName[$clientID]︲Dolar Görüntüleme:$userAvatar[$clientID]}{description:Dolar, **$jsonRequest[https://tilki.dev/api/dolar;dolar;ERROR]** Türk Lirası. Diğer bilgilere ulaşmak istersen tekrar komutu kullanabilirsin. <t:$jsonRequest[https://tilki.dev/api/dolar;zaman;ERROR]:R> güncellendi.}{color:20c236}{footer:©️︲HamsterMert 2024}};;;everyone;true;false]
    `
    },
  ];