const authController = require('../controllers/authControllers');
const router = require('express').Router();
const middleware = require('../middlewares/middleware');

router.post('/api/login', authController.login);

//writers route
router.post('/api/writer/add', middleware.auth, middleware.role, authController.add_writer);
router.get('/api/news/writers', middleware.auth, middleware.role, authController.get_writers);
router.get('/api/news/writer/:id', middleware.auth, middleware.role, authController.getWriterById);
router.put('/api/update/writer/:id', middleware.auth, middleware.role, authController.update_writer);
router.delete('/api/delete/writer/:id', middleware.auth, middleware.role, authController.delete_writer);

router.put('/api/update-profile/:id', middleware.auth, middleware.role, authController.update_profile);

router.get('/api/profile/:id', middleware.auth, middleware.role, authController.get_profile);

router.post('/api/change-password', middleware.auth, authController.change_password);


module.exports = router