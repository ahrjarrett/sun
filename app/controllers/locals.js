module.exports = function (app) {

	app.locals.company = 'Sun Ray Pools';
	app.locals.phone = 9723330714;
	app.locals.rootUrl = 'https://www.sunraypoolstx.com';
	app.locals.social = {
    'tel:+19723330714': 'phone',
		'https://www.facebook.com/SunRayPoolsTX/': 'facebook-square',
		'https://twitter.com/sunraypoolstx': 'twitter-square',
		'http://www.houzz.com/pro/sunraypools/': 'houzz'
	};
	app.locals.blog = {
		features: [
			{
				title: 'Does Chlorine Really Keep the Pool Cleaner? Sun Ray Pools Plays Mythbusters',
				link: 'feature1link'
			},
			{
				title: 'Feature 2 Title is just a regular title that should give some indication as to what’s inside',
				link: 'feature2link'
			},
			{
				title: 'Feature 3 Title, keeping it kinda short but not that whort, really.',
				link: 'feature3link'
			},
			{
				title: 'Feature 4 Title cool new features how with they integrate with our lives?',
				link: 'feature4link'
			}
		],
		newnews: [
			{
				title: 'Story 1 Title, with a subtitle, and a secret alternate ending.',
				link: 'story1link'
			},
			{
				title: 'Story 2 Title.',
				link: 'story2link'
			},
			{
				title: 'Story3 Title with headlines and such!',
				link: 'story3link'
			},
			{
				title: 'Story 4 Title testing line-height',
				link: 'story4link'
			}
		]
	};

	app.locals.footerUl = {
		'Home': '/',
		// 'BBB': 'http://www.bbb.org/dallas/business-reviews/swimming-pool-contractors-dealers-design/sun-ray-pools-and-spas-in-rowlett-tx-90005855',
		'Swimming Pools': '/swimming-pools',
		'Get a Quote': '/#open-modal-contact',
		'Financing': '/financing',
		'Outdoor Living': '/outdoor-living',
		'Swim Spas': '/swim-spas'
	};
	app.locals.nav = {
		'Welcome': '',
		'About': 'about-us',
		'Services': 'outdoor-living',
		'Portfolio': 'swimming-pools'
	};

	app.locals.subnav = {
		'Outdoor Living': 'outdoor-living',
		// 'About Us': 'about-us',
		'Special Features': 'special-features',
		'Financing': 'financing',
		'Swimming Pools': 'swimming-pools'
	};

	app.locals.partners = [
		'apsp', 'bbb', 'pentair', 'wetedge'
	];

	app.locals.items = {'Link 1':'link-1','Link 2':'link-2','Link 3':'link-3','Link 4':'link-4'};

};
