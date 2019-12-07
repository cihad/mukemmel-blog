'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Posts', [
      {
        title: 'Merhaba dünya!',
        body: `Bu benim ilk blog yazım.`,
        createdAt: new Date(2019, 11, 1),
        updatedAt: new Date(2019, 11, 1),
      },
      {
        title: 'Örnek yazı',
        body: `Bu yazıda markdown'un farklı özellikleri kullandıldı.

#### Örnek başlık

**Bu kalın bir yazı**

_Bu italik bir yazı_

~~Üstü çizili~~

#### Alıntı mı yapmak istiyorsun

> Alıntılar iç içe girebilir
>
> > ...bunun gibi

#### Listeler

Sırasız

- bu ilk madde
- ikinci madde
  - bu bir alt madde
    - alt maddenin alt maddesi neden olmasın?
- oldukça basit!

Sıralı

1. sen
2. ben
3. o

#### Kod ekleyelim

Girinti ekleyebilirsin:

    // bu bir yorum satırı
    line 1 of code
    line 2 of code
    line 3 of code

Ya da bu üç tik kullanabilirsin:

\`\`\`
Sample text here...
\`\`\`

Daha fazlası için: https://markdown-it.github.io/`,
        createdAt: new Date(2019, 11, 3),
        updatedAt: new Date(2019, 11, 3),
      },
      {
        title: '1500TL ödül! Sen de yarışmaya katıl!',
        body: `Sen de bu blog'un bir kopyasını oluşturabilir ve yeni özellikler ekleyerek 1500TL ödüllü bu yarışmaya katılabilirsin!

Detaylar için videoyu izlemelisin:
https://youtu.be/cHUh0FmPd3A`,
        createdAt: new Date(2019, 11, 5),
        updatedAt: new Date(2019, 11, 5),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
