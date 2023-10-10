// Import necessary modules
import readline from "readline";
import fs from "fs";
import Sequelize from "sequelize";

// Create a Sequelize instance to connect to the database
const sequelize = new Sequelize('app', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Define an asynchronous function to insert users into the database
const insertUsers = async () => {
  // Authenticate the Sequelize instance to check the database connection
  await sequelize.authenticate();
  console.log('Connection to the database has been established successfully.');

  // Create a readline interface to read data from 'users.csv' file
  const file = readline.createInterface(fs.createReadStream('users.csv'));

  // Create an array to store user data
  const users = [];

  // Event listener for each line in the file
  file.on("line", async (line) => {
    // Parse the line and add user data to the 'users' array
    users.push(line.split(','));
  });

  // Event listener for when the file reading is complete
  file.on("close", async () => {
    // Use Sequelize to insert user data into the 'users' table
    await sequelize.query({
      query: 'INSERT INTO users (name, email) VALUES ?',
      values: [users],
    });
    console.log('Inserted users successfully.');
  });
};

// Call the 'insertUsers' function to start the data insertion process
insertUsers();

// SIN ORM