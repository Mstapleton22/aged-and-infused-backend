
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('preset').del()
    .then(function () {
      // Inserts seed entries
      return knex('preset').insert([
        { id: 1, name: "Navel Gazer" },
        { id: 2, name: "Cherry Pie" },
        { id: 3, name: "Blue Sunday" },
        { id: 4, name: "Wake Up" },
        { id: 5, name: "Garden Party" },
        { id: 6, name: "Apple A Day" },
        { id: 7, name: "Island Time" },
      ]);
    });
};
