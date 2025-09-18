const newsControllers = require('../controllers/newsControllers');
const router = require('express').Router();
const middleware = require('../middlewares/middleware');

//writers route
router.post('/api/news/add', middleware.auth, newsControllers.add_news);
router.get('/api/images', middleware.auth, newsControllers.get_images);
router.post('/api/images/add', middleware.auth, newsControllers.add_images);

router.get('/api/news', middleware.auth, newsControllers.get_dashboard_news);
router.get('/api/edit/news/:news_id', middleware.auth, newsControllers.get_edit_dashboard_news);

router.put('/api/news/update/:news_id', middleware.auth, newsControllers.update_news);
router.delete('/api/news/delete/:news_id', middleware.auth, newsControllers.delete_news);
router.put('/api/news/status-update/:news_id', middleware.auth, newsControllers.update_news_status);

//Frontend api all
router.get('/api/all/news', newsControllers.get_all_news);
router.get('/api/category/all', newsControllers.get_categories);
//get news details
router.get('/api/news/details/:slug', newsControllers.get_details_news);
//get per category
router.get('/api/category/news/:category', newsControllers.get_category_news);
//popular news
router.get('/api/popular/news', newsControllers.get_popular_news);
//get latest news
router.get('/api/latest/news', newsControllers.get_latest_news);
//get recent news
router.get('/api/recent/news', newsControllers.get_recent_news);

//get images news
router.get('/api/images/news', newsControllers.get_images_news);

module.exports = router