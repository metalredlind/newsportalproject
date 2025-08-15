const {formidable} = require('formidable');
const cloudinary = require('cloudinary').v2;
const newsModel = require('../models/newsModel')
const {mongo: { ObjectId} } = require('mongoose');
const moment = require('moment');

class newsControllers {

    add_news = async (req,res) => {
        try {
            // Check if userInfo exists
            if (!req.userInfo) {
                console.log('No userInfo found in request');
                return res.status(401).json({ message: "User not authenticated" });
            }

            const { id, name, category } = req.userInfo;
            
            // Validate required user fields
            if (!id || !name || !category) {
                console.log('Missing required user fields:', { id, name, category });
                return res.status(400).json({ message: "Missing required user information" });
            }

            // Check Cloudinary environment variables
            if (!process.env.cloud_name || !process.env.api_key || !process.env.api_secret) {
                console.log('Missing Cloudinary environment variables');
                return res.status(500).json({ message: "Cloudinary configuration error" });
            }

            const form = formidable({});

            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            });

            const [fields, files] = await form.parse(req);
            
            // Validate form data
            if (!files.image || !files.image[0]) {
                return res.status(400).json({ message: "Image is required" });
            }

            if (!fields.title || !fields.title[0]) {
                return res.status(400).json({ message: "Title is required" });
            }

            // Upload image to Cloudinary
            const { url } = await cloudinary.uploader.upload(files.image[0].filepath, {folder: 'news_images'});
            
            const { title, description } = fields;

            const news = await newsModel.create({
                writerId: id,
                writerName: name,
                title: title[0].trim(),
                slug: title[0].trim().split(' ').join('-'),
                category,
                description: description ? description[0] : '',
                date: moment().format('LL'),
                image: url
            });

            return res.status(201).json({ message:"News added successfully", news });
            
        } catch (error) {
            console.error('Error in add_news:', error);
            
            // Handle specific errors
            if (error.message.includes('cloudinary')) {
                return res.status(500).json({ message: "Image upload failed" });
            }
            
            if (error.name === 'ValidationError') {
                return res.status(400).json({ message: "Validation error", details: error.message });
            }
            
            return res.status(500).json({ message: "Internal Server Error" });
        }
    };

}

module.exports = new newsControllers();