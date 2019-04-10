
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('liquor').del()
    .then(function () {
      // Inserts seed entries
      return knex('liquor').insert([
        { id: 1, name: 'whiskey' },
        { id: 2, name: 'gin' },
        { id: 3, name: 'vodka' },
        { id: 4, name: 'tequila' },
        { id: 5, name: 'rum' },
      ]);
    });
};
