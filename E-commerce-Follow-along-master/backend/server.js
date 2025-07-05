require("dotenv").config({ path: './config/.env' });
const app = require("./app");
const connectDb = require("./db/db");
const PORT = process.env.PORT || 5000;

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

connectDb();

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log(`Unhandled rejection: ${err.message}`);
    server.close(() => process.exit(1));
});
