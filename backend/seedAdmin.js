import Admin from './models/adminModel.js';
import sequelize from './config/database.js';

async function seed() {
    await sequelize.sync();

    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'password123';

    try {
        const adminExists = await Admin.findOne({ where: { username } });

        if (adminExists) {
            await adminExists.update({ password });
            console.log('Admin updated with ENV credentials.');
        } else {
            await Admin.create({ username, password });
            console.log(`Admin created: ${username}`);
        }
    } catch (err) {
        console.error('Error seeding admin:', err.message);
    } finally {
        process.exit();
    }
}

seed();
