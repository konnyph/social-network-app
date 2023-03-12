const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

 
  await Thought.deleteMany({});


  await User.deleteMany({});

  
  const users = [
      {
          username: "luckie",
          email: "luckie@gmail.com"
      },
      {
          username: "monie",
          email: "monie@gmail.com"
      }
  ];

  
  const thoughts = [
      {
          thoughtText: "Being a cat is fun",
          username: "Mochii"
      },
      {
          thoughtText: "Why do human keep touching me???",
          username: "Finn"
      }
  ]

  
  await User.collection.insertMany(users);

  
  await Thought.collection.insertMany(thoughts);

  
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});