import mongoose from "mongoose";

import "../config/env.js";
import connectDB from "../config/db_connection.js";

import seedRoles from "./role.seeder.js";
import seedSuperAdmin from "./superAdmin.seeder.js";

const runSeeders = async () => {
    try {
        await connectDB();

        await seedRoles();
        await seedSuperAdmin();

        console.log("All seeders executed successfully.");
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
        console.log("Database connection closed.");
    }
};

runSeeders();