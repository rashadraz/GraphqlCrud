const { DataTypes } = require("sequelize");
const db = require("../dbconfig");
const Todo = require("./Todo");

const User = db.sequelise.define("users", {
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER,
	},
	firstname: DataTypes.STRING,
	password: DataTypes.STRING,
	lastname: DataTypes.STRING,
	email: DataTypes.STRING,
});

User.hasMany(Todo);

module.exports = User;
