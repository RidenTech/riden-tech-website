import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        unique: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tags: {
        type: DataTypes.JSON,
        defaultValue: []
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: DataTypes.ENUM('draft', 'published'),
        defaultValue: 'draft'
    },
    readTime: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Admin'
    },
    metaDescription: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    hooks: {
        beforeValidate: async (blog) => {
            if (blog.title && (blog.changed('title') || !blog.slug)) {
                let baseSlug = blog.title
                    .toLowerCase()
                    .replace(/[^\w ]+/g, '')
                    .replace(/ +/g, '-');

                let slug = baseSlug;
                let counter = 1;

                // Check for uniqueness
                while (true) {
                    const existing = await Blog.findOne({
                        where: { slug },
                        attributes: ['id']
                    });

                    // If no collision, or collision is with the current record, we're good
                    if (!existing || (blog.id && existing.id === blog.id)) {
                        break;
                    }

                    slug = `${baseSlug}-${counter}`;
                    counter++;
                }

                blog.slug = slug;
            }
        }
    },
    timestamps: true,
    tableName: 'blogs'
});

export default Blog;
