import InternalRole from "../models/internalRole.model.js";


const defaultRoles = [
    {
        name: "Super Admin",
        key: "super_admin",
        description: "Full access to the People Hub platform."
    },
    {
        name: "Platform Admin",
        key: "platform_admin",
        description: "Manages platform operations."
    },
    {
        name: "Support Admin",
        key: "support_admin",
        description: "Manages customer support operations."
    },
    {
        name: "Billing Admin",
        key: "billing_admin",
        description: "Manages platform billing operations."
    }
];

const seedRoles = async () => {
    for (const role of defaultRoles) {
        await InternalRole.updateOne(
            { key: role.key },
            {
                $setOnInsert: {
                    ...role,
                    isSystem: true
                }
            },
            { upsert: true }
        );
    }

    console.log("Internal roles seeded successfully.");
};

export default seedRoles;