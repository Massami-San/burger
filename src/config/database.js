module.exports = {
	dialect: "postgres",
	host: "localhost",
	port: 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: "burguer-massami-db",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
	},
};
