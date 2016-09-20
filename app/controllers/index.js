var express       = require('express'),
		router        = express.Router();
var BlogData      = require('../models/blog_index.data.js'),
		FinanceData   = require('../models/finance.data.js'),
		IndexData     = require('../models/index.data.js'),
		LandingData   = require('../models/landing.data.js'),
		PoolsData     = require('../models/pools.data.js'),
		PortfolioData = require('../models/portfolio.data.js'),
		PostData      = require('../models/_firstpost.data.js'),
		ProductData   = require('../models/product.data.js'),
		ServicesData  = require('../models/services.data.js'),
		SpasData      = require('../models/spas.data.js'),
		SpecialData   = require('../models/special.data.js'),
		ThanksData    = require('../models/thanks.data.js');
		
module.exports = function (app) {

	app.use('/', router);

	router.get('/', function (req, res, next) {
		var data = new IndexData();
		res.render('index', {
			title: data.title,
			url: data.url,
			buttons: data.buttons,
			features: data.features,
			home: data.home,
			info: data.info,
			info1: data.info1,
			quotes: data.quotes
		});
	});

	router.get('/outdoor-living', function (req, res, next) {
		var data = new LandingData();
		res.render('landing', {
			title: data.title,
			url: data.url,
			cta: data.cta,
			info: data.info
		});
	});

	router.get('/about-us', function (req, res, next) {
		var data = new ProductData();
		res.render('products', {
			title: data.title,
			url: data.url,
			spotlight: data.spotlight,
			accordion: data.accordion,
			showcase: data.showcase
		});
	});

	router.get('/swimming-pools', function (req, res, next) {
		var data = new PoolsData();
		res.render('pools', {
			title: data.title,
			url: data.url,
			features: data.features
		});
	});

	router.get('/swim-spas', function (req, res, next) {
		var data = new SpasData();
		res.render('spas', {
			title: data.title,
			url: data.url
		});
	});

	router.get('/financing', function (req, res, next) {
		var data = new FinanceData();
		res.render('finance', {
			title: data.title,
			url: data.url,
			cta: data.cta
		});
	});

	router.get('/special-features', function (req, res, next) {
		var data = new SpecialData();
		res.render('special', {
			title: data.title,
			url: data.url,
			buttons: data.buttons,
			home: data.home,
			showcase: data.showcase
		});
	});

	router.get('/thank-you', function (req, res, next) {
		var data = new ThanksData();
		res.render('thanks', {
			title: data.title,
			url: data.url
		});
	});

	router.get('/services', function (req, res, next) {
		var data = new ServicesData();
		res.render('services', {
			title: data.title,
			url: data.url
		});
	});

	router.get('/portfolio', function (req, res, next) {
		var data = new PortfolioData();
		res.render('portfolio', {
			title: data.title,
			url: data.url,
			cta: data.cta,
			features: data.features,
			spotlight: data.spotlight
		});
	});

	router.get('/blog', function(req, res, next) {
		var data = new BlogData();
		res.render('blog', {
			title: data.title,
			url: data.url,
			articles: data.articles
		});
	});

	router.get('/blog/post0', function(req, res, next) {
		var data = new PostData();
		res.render('post', {
			title: data.title,
			url: data.url,
			article: data.article,
			metadata: data.metadata
		});
	});


	// RAW CONTENT
	// router.get('/financing', function(req, res) {
	// 	res.render('financing');
	// });
	// router.get('/swim-spas', function(req, res) {
	// 	res.render('swim-spas');
	// });
	// router.get('/swimming-pools', function(req, res) {
	// 	res.render('pools');
	// });
	// router.get('/special-features', function(req, res) {
	// 	res.render('special-features');
	// });


	// 301s
	router.all('/outdoor-living.html', function(req, res) {
		res.sendStatus(301);
		res.redirect('/outdoor-living');
	});
	router.all('/about-us.html', function(req, res) {
		res.sendStatus(301);
		res.redirect('/about-us');
	});
	router.all('/financing.html', function(req, res) {
		res.sendStatus(301);
		res.redirect('/financing');
	});
	router.all('/swim-spas.html', function(req, res) {
		res.sendStatus(301);
		res.redirect('/swim-spas');
	});
	router.all('/swimming-pools.html', function(req, res) {
		res.sendStatus(301);
		res.redirect('/swimming-pools');
	});
	router.all('/special-features.html', function(req, res) {
		res.sendStatus(301);
		res.redirect('/special-features');
	});


	// 302s
	router.get('/10-steps-report-request.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/contact.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/faqs.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/pentair.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/pool-covers.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/pool-plaster.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/pool-tiles.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/privacy-policy.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/renovation.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/services.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/sun-deep-heat.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/testimonials.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/thank-you-10-steps-report.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/thank-you-service.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});
	router.get('/thank-you.html', function(req, res) {
		var path = req.path;
		res.status(302).send(path + ' is finding a new home!');
	});

};

