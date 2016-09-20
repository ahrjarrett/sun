var express        = require('express'),
		bodyParser     = require('body-parser'),
		compress       = require('compression'),
		cookieParser   = require('cookie-parser'),
		favicon        = require('serve-favicon'),
		glob           = require('glob'),
		helmet         = require('helmet'),
		logger         = require('morgan'),
		methodOverride = require('method-override');

module.exports = function(app, config) {
	
	var env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';

	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	app.use(favicon(config.root + '/public/images/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(helmet());
	app.use(methodOverride());

	app.use(function(req, res, next) {
		if(req.url.substr(-1) == '/' && req.url.length > 1)
			res.redirect(301, req.url.slice(0, -1));
		else
			next();
	});


	var controllers = glob.sync(config.root + '/app/controllers/*.js');
	controllers.forEach(function (controller) {
		require(controller)(app);
	});

	app.use(function (req, res, next) {
		var err = new Error('File Not Found: ' + req.url);
		err.status = 404;
		next(err);
	});
	
	if(app.get('env') === 'development'){
		app.use(function (err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: err,
				title: 'error'
			});
		});
	}

	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {},
			title: 'error'
		});
	});

};
