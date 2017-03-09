
module.exports = function PoolsData(opts) {
  'use strict'

  this.title = 'Photos of Our Work'
	this.url = 'gallery'

  this.cta = {
    bg: 'cta04.jpg',
    header: 'Photo Gallery',
    subheader: 'Your Dream Pool is Our Business'
  }

  this.photos = {
    'pool-01': 'slide01.jpg'
  }

  this.images = {
    rowone: {
      0: [ 'slide09.jpg', 'slide22.jpg', 'slide23.jpg', 'slide27.jpg', 'slide28.jpg', 'slide29.jpg', 'slide30.jpg', 'slide41.jpg', 'slide44.jpg', 'slide54.jpg', 'slide55.jpg' ],
      1: [ 'slide18.jpg', 'slide24.jpg', 'slide38.jpg', 'slide46.jpg', 'slide51.jpg', 'slide52.jpg' ],
      2: [ 'slide03.jpg', 'slide19.jpg', 'slide20.jpg', 'slide36.jpg', 'slide49.jpg', 'slide50.jpg' ]
    },
    rowtwo: {
      0: [ 'slide32.jpg', 'slide34.jpg', 'slide35.jpg', 'slide36.jpg', 'slide39.jpg', 'slide43.jpg', 'slide45.jpg', 'slide47.jpg', 'slide58.jpg' ],
      1: [ 'slide12.jpg', 'slide14.jpg' ],
      2: [ 'slide10.jpg', 'slide05.jpg', 'slide06.jpg' ]
    }
  }


	this.features = {
		rowone: {
			0:[
				'slide07.jpg', 'Swimming Pools', 'taxi', 'outdoor-living', 'See photos of swimming pools we’ve built!'
			],
			1:[
				'slide08.jpg', 'Swim Spas', 'subway', 'financing', 'See photos of swim spas we’ve built!'
			],
			2:[
				'slide09.jpg', 'Decks', 'bicycle', 'swimming-pools', 'See photos of decks we’ve built!'
			]
		},

		rowtwo: {
			0:[
				'slide25.jpg', 'Waterfalls', 'taxi', 'outdoor-living', 'See photos of waterfalls we’ve built!'
			],
			1:[
				'slide11.jpg', 'Outdoor Kitchens', 'subway', 'financing', 'See photos of kitchens we’ve built!'
			],
			2:[
				'slide36.jpg', 'Patios', 'bicycle', 'swimming-pools', 'See photos of patios we’ve built!'
			]
		}

	}

}

