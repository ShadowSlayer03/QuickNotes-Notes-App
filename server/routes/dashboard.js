const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth');
const dashController = require('../controllers/dashboardController');

router.get('/dashboard',isLoggedIn,dashController.dashboard);
router.get('/dashboard/item/:id',isLoggedIn,dashController.dashboardViewNote);
router.put('/dashboard/item/:id',isLoggedIn,dashController.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id',isLoggedIn,dashController.dashboardDeleteNote);
router.get('/dashboard/add',isLoggedIn,dashController.dashboardAddNote);
router.post('/dashboard/add',isLoggedIn,dashController.dashboardAddNoteSubmit);
router.get('/dashboard/search',isLoggedIn,dashController.dashboardSearch);
router.post('/dashboard/search',isLoggedIn,dashController.dashboardSearchSubmit);

module.exports = router;