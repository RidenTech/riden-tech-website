import Blog from '../models/blogModel.js';

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll({ order: [['createdAt', 'DESC']] });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single blog
// @route   GET /api/blogs/:idOrSlug
// @access  Public
export const getBlogById = async (req, res) => {
    const { idOrSlug } = req.params;
    try {
        let blog;
        if (isNaN(idOrSlug)) {
            blog = await Blog.findOne({ where: { slug: idOrSlug } });
        } else {
            blog = await Blog.findByPk(idOrSlug);
        }

        if (blog) {
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        console.error('Fetch blog error:', error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private/Admin (Middleware needed)
export const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
export const updateBlog = async (req, res) => {
    try {
        const { title, content, excerpt, category, tags, imageUrl, featured, status, metaDescription } = req.body;
        const blog = await Blog.findByPk(req.params.id);

        if (blog) {
            // Calculate readTime if content is provided
            let readTime = blog.readTime;
            if (content) {
                readTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
            }

            await blog.update({
                title,
                content,
                excerpt,
                category,
                tags,
                imageUrl,
                featured,
                status,
                readTime,
                metaDescription
            });
            res.json(blog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        console.error('Update error:', error);
        res.status(400).json({ message: error.message, errors: error.errors });
    }
};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (blog) {
            await blog.destroy();
            res.json({ message: 'Blog removed' });
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
