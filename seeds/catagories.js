
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_category').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_category').insert([
        {
          id: 1,
          name: "Sweet",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin, tequila, rum
        }, {
          id: 2,
          name: "Sour",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin, tequila, rum
        }, {
          id: 3,
          name: "Spirit-Forward",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin, tequila, rum
        }, {
          id: 4,
          name: "Savory",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin, tequila, rum
        }, {
          id: 5,
          name: "Herbal",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin, tequila, rum
        }
      ]);
    });
};
