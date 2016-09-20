module.exports = function ProductData(opts) {
	// if(!opts) opts = {};
	
	this.title = 'About';
	this.url = 'about-us';


	this.spotlight = {
		'header': 'Residential Pools',
		'subheader': 'What will your new pool look like?',
		'bg': 'spotlight0.jpg',
		'action': 'Choose which service you are most interested in:',
		'products': {
			'Social Media': 'Learn about how social networking can help you grow, and take your business to the next level.',
			'Website Development': 'End-to-end website design and development, fully customized based on what you need, right now.',
			'Search Engine Marketing': 'You should be spending your time on your business, not learning how to rank higher than your competitors on Google.'
		}
	};

	this.showcase = [
		{
			img: 'showcase0.jpg',
			head: 'About Sun Ray Pools',
			body: 'We serve Rockwall, McKinney, Plano and the entire Dallas Metroplex. We provide on-site supervision with every step of the construction of your pool.'
		},
		{
			img: 'showcase1.jpg',
			head: 'Products & Services',
			body: 'Our work is primarily: Residential Pools, Outdoor Living, Service Pool Covers, and Swim Spas Renovations.'
		},
		{
		img: 'showcase2.jpg',
			head: 'Professional Associations',
			body: 'Proud to be a member of the Better Business Bureau (BBB) and the Association of Pool & Spa Professionals (APSP).'
		}
	];

	this.accordion = [
		{
			head: 'Header Text 1',
			body: [
				{
					id: 0,
					display: 'Text to change text to change text to change',
					hidden: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 1,
					display: 'Text to change',
					hidden: 'Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 2,
					display: 'Text to change lots',
					hidden: 'Dispum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 3,
					display: 'Text to change fo\' real',
					hidden: 'Bordom Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				}
			]
		},
		// {
		// 	head: 'Header Text 2',
		// 	body: [
		// 		{
		// 			id: 4,
		// 			display: 'Text2 to change text to change text to change',
		// 			hidden: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		},
		// 		{
		// 			id: 5,
		// 			display: 'Text 2 change',
		// 			hidden: 'Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		},
		// 		{
		// 			id: 6,
		// 			display: 'Text to change 2 lots',
		// 			hidden: 'Dispum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		},
		// 		{
		// 			id: 7,
		// 			display: 'More info',
		// 			hidden: 'Bordom Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
		// 		}
		// 	]
		// },
		{
			head: 'Header Text 3',
			body: [
				{
					id: 8,
					display: 'Text to change text cubed',
					hidden: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 9,
					display: 'Text 3 change',
					hidden: 'Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 10,
					display: '3 Text to change lots',
					hidden: 'Dispum Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				},
				{
					id: 11,
					display: 'More info',
					hidden: 'Bordom Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
				}
			]
		}

	];




};