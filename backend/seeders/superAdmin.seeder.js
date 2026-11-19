import bcrypt from "bcryptjs";

import InternalUser from "../models/internalUser.model.js";
import InternalRole from "../models/internalRole.model.js";

const seedSuperAdmin = async () => {
    const { SUPERADMIN_NAME, SUPERADMIN_EMAIL, SUPERADMIN_PASSWORD } = process.env;

    if (!SUPERADMIN_NAME || !SUPERADMIN_EMAIL || !SUPERADMIN_PASSWORD) {
        throw new Error("Super Admin environment variables are missing.");
    }

    const email = SUPERADMIN_EMAIL.toLowerCase().trim();

    const superAdminRole = await InternalRole.findOne({
        key: "super_admin"
    });

    if (!superAdminRole) {
        throw new Error("Super Admin role not found. Seed roles first.");
    }

    const existingUser = await InternalUser.findOne({ email });

    if (existingUser) {
        await InternalUser.updateOne(
            { _id: existingUser._id },
            {
                $addToSet: {
                    roles: superAdminRole._id
                }
            }
        );

        console.log("Super Admin already exists. Role verified.");
        return;
    }

    const hashedPassword = await bcrypt.hash(SUPERADMIN_PASSWORD, 12);

    await InternalUser.create({
        name: SUPERADMIN_NAME,
        email,
        password: hashedPassword,
        roles: [superAdminRole._id],
        isActive: true
    });

    console.log("Super Admin created successfully.");
};

export default seedSuperAdmin;