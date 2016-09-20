module.exports = function () {
  
  this.title = 'Our Portfolio';
	this.url = 'portfolio';

  this.cta = {
    bg: 'cta03.jpg',
    header: 'Get an Estimate',
    subheader: 'Free consultation with an expert.'
  };
  this.spotlight = {
		'header': 'Our Portfolio',
    'bg': 'spotlight1.jpg',
		'subheader': 'What will your backyard oasis look like?',
		'action': 'Here are a few examples of work we’ve done for our clients:'
	};
  this.features = {
		rowone: {
			0:[
				'Residential Pools', 'slide03.jpg', 'location-arrow', ['slide07.jpg', 'slide18.jpg', 'slide19.jpg', 'slide20.jpg']
			],
			1:[
				'Waterfalls', 'slide32.jpg', 'anchor', ['slide25.jpg', 'slide33.jpg', 'slide34.jpg', 'slide47.jpg']
			],
			2:[
				'Spas', 'slide08.jpg', 'map-marker', ['slide44.jpg', 'slide38.jpg', 'slide40.jpg', 'slide46.jpg']
			],
			3:[
				'Outdoor Kitchens', 'slide12.jpg', 'compass', ['slide11.jpg', 'slide13.jpg', 'slide14.jpg', 'slide17.jpg']
			],
			4:[
				'Patios', 'slide05.jpg', 'flag', ['slide06.jpg', 'slide09.jpg', 'slide10.jpg', 'slide36.jpg']
			],
			5:[
				'Decks', 'slide03.jpg', 'map-marker', ['slide05.jpg', 'slide06.jpg', 'slide10.jpg', 'slide57.jpg']
			]
		},
		rowtwo: {
			0:[ 'slide59.jpg', 'Residential Pools', 'taxi', 'outdoor-living', 'See just how beautiful your new pool could be' ],
			1:[ 'slide60.jpg', 'Outdoor Kitchens', 'subway', 'financing', 'Custom-made and designed for outdoor living' ],
			2:[ 'slide61.jpg', 'Patios & Decks', 'bicycle', 'swimming-pools', 'Your whole backyard, custom-built to your liking' ]
		}
	};

};


