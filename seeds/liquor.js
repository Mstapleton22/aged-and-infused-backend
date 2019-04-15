
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('liquor').del()
    .then(function () {
      // Inserts seed entries
      return knex('liquor').insert([
        { id: 1, name: 'whiskey', cocktails: ['Manhattan', 'Mint Julep', 'Old Fashioned'] },
        { id: 2, name: 'gin', cocktails: ['French 75', 'Pink Gin & Tonic', 'Triple Citrus'] },
        { id: 3, name: 'vodka', cocktails: ['Martini', 'Helsinki Mule', 'Swedish Paloma'] },
        { id: 4, name: 'tequila', cocktails: ['Honey Bee', 'Sunrise', 'Manhattan'] },
        { id: 5, name: 'rum', cocktails: ['Punch', 'DarknStormy', 'Mojito'] },
      ]);
    });
};


// 'https://www.liquor.com/recipes/manhattan-2/', 'https://www.liquor.com/recipes/mint-julep/]' 
// https://www.liquor.com/recipes/bourbon-old-fashioned/


// gin 
// https://www.liquor.com/recipes/amaretto-french-75/
// https://www.liquor.com/recipes/pink-plymouth-gin-tonic/
// https://www.liquor.com/recipes/triple-citrus-24/

// vodka 
// https://www.liquor.com/recipes/absolut-vodka-martini/
// https://www.liquor.com/recipes/finlandia-vodka-helsinki-mule/
// https://www.liquor.com/recipes/absolut-swedish-paloma/

// tequila 
// https://www.liquor.com/recipes/tequila-honey-bee/
// https://www.liquor.com/recipes/tequila-sunrise/
// https://www.liquor.com/recipes/cazadores-tequila-manhattan/

// rum
// https://www.liquor.com/recipes/barbados-rum-punch/
// https://www.liquor.com/recipes/dark-n-stormy/
// https://www.liquor.com/recipes/mojito/