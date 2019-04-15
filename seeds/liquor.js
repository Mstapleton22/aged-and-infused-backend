
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('liquor').del()
    .then(function () {
      // Inserts seed entries
      return knex('liquor').insert([
        {
          id: 1, name: 'whiskey'
          // , cocktails: [{
          //   url: 'https://www.liquor.com/recipes/manhattan-2/',
          //   name: 'Manhattan'
          // }, {
          //   url: 'https://www.liquor.com/recipes/mint-julep/',
          //   name: 'Mint Julep'
          // }, {
          //   url: 'https://www.liquor.com/recipes/bourbon-old-fashioned/',
          //   name: 'Old Fashioned'
          // }]
        },
        {
          id: 2, name: 'gin'
          // , cocktails: [{
          //   url: 'https://www.liquor.com/recipes/amaretto-french-75/', name: 'French 75'
          // }, {
          //   url: 'https://www.liquor.com/recipes/pink-plymouth-gin-tonic/', name: 'Pink Gin & Tonic'
          // }, {
          //   url: 'https://www.liquor.com/recipes/triple-citrus-24/', name: 'Triple Citrus'
          // }]
        },
        {
          id: 3, name: 'vodka'
          // , cocktails: [{
          //   url: 'https://www.liquor.com/recipes/absolut-vodka-martini/', name: 'Martini'
          // }, {
          //   url: 'https://www.liquor.com/recipes/finlandia-vodka-helsinki-mule/', name: 'Helsinki Mule'
          // }, {
          //   url: 'https://www.liquor.com/recipes/absolut-swedish-paloma/', name: 'Swedish Paloma'
          // }]
        },
        {
          id: 4, name: 'tequila'
          // , cocktails: [{
          //   url: 'https://www.liquor.com/recipes/tequila-honey-bee/', name: 'Honey Bee'
          // }, {
          //   url: 'https://www.liquor.com/recipes/tequila-sunrise/', name: 'Sunrise'
          // }, {
          //   url: 'https://www.liquor.com/recipes/cazadores-tequila-manhattan/', name: 'Manhattan'
          // }]
        },
        {
          id: 5, name: 'rum'
          // , cocktails: [{
          //   url: 'https://www.liquor.com/recipes/barbados-rum-punch/', name: 'Punch'
          // }, {
          //   url:
          //     'https://www.liquor.com/recipes/dark-n-stormy/', name: 'DarknStormy'
          // }, {
          //   url: 'https://www.liquor.com/recipes/mojito/', name: 'Mojito'
          // }]
        },
      ]);
    });
};