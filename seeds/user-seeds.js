const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'indyjones',
        password: 'password123'
    },
    {
        username: 'marionravenwood',
        password: 'password123'
    },
    {
        username: 'belloq',
        password: 'password123'
    },
    {
        username: 'toht',
        password: 'password123'
    },
    {
        username: 'sallah',
        password: 'password123'
    },
    {
        username: 'williescott',
        password: 'password123'
    },
    {
        username: 'elsa',
        password: 'password123'
    },
    {
        username: 'walterdonovan',
        password: 'password123'
    },
    {
        username: 'marcusbrody',
        password: 'password123'
    },
    {
        username: 'shortround',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;