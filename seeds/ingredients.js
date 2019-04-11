
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          name: "Orange",
          image: "https://accustudios.com/wp-content/uploads/2019/04/orange.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, tequila
        },
        {
          id: 2,
          name: "Cinnamon",
          image: "https://accustudios.com/wp-content/uploads/2019/04/cinnamon.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, rum, vodka
        },
        {
          id: 3,
          name: "Clove",
          image: "https://accustudios.com/wp-content/uploads/2019/04/clove.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey
        },
        {
          id: 4,
          name: "Cherry",
          image: "https://accustudios.com/wp-content/uploads/2019/04/cherry.png",
          // image: "cherry.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka
        },
        {
          id: 5,
          name: "Vanilla",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/vanilla.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin
        },
        {
          id: 6,
          name: "Lemon",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/lemon.png",
          // image: "lemon.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, tequila, rum, vodka
        },
        {
          id: 7,
          name: "Blueberry",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/blueberry.png",
          // image: "blueberry.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin
        },
        {
          id: 8,
          name: "Lavender",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/lavender.png",
          // category_id:
          // Liquor_id: 
          // Liquor_name: Whiskey, vodka, gin
        },
        {
          id: 9,
          name: "Pineapple",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/pineapple.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, tequila, rum
        },
        {
          id: 10,
          name: "Cayenne Pepper",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/red-peppers.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, tequila, rum
        },
        {
          id: 11,
          name: "Espresso Beans",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/coffee-beans.png",
          // category_id:
          // Liquor_id:
          // Liquor_name: Whiskey, vodka
        },
        {
          id: 12,
          name: "Strawberry",
          // image: "strawberry.png",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/strawberry.png",
          // Liquor_id:
          // Liquor_name: Vodka, gin, tequila, rum
        },
        {
          id: 13,
          name: "Hibiscus",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/hibiscus.png",
          // Liquor_id:
          // Liquor_name: Vodka, gin, tequila, rum
        },
        {
          id: 14,
          name: "Apple",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/apple.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka
        },
        {
          id: 15,
          name: "Grapefruit",
          // image: "grapefruit.png",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/grapefruit.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, tequila, gin
        },
        {
          id: 16,
          name: "Rosemary",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/rosemary.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, gin
        },
        {
          id: 17,
          name: "Jalapeno",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/jalapeno.png",
          // Liquor_id:
          // Liquor_name: Vodka, tequila
        },
        {
          id: 18,
          name: "Lime",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/lime.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka, tequila, gin, rum
        },
        {
          id: 19,
          name: "Sun Dried Tomato",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/tomato.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka
        },
        {
          id: 20,
          name: "Pickle",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/pickle.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka
        },
        {
          id: 21,
          name: "Sports Pepper",
          image:
            "https://accustudios.com/wp-content/uploads/2019/04/yellow-peppers.png",
          // Liquor_id:
          // Liquor_name: Whiskey, vodka
        }
      ]);
    });
};
