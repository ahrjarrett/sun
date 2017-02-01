module.exports = function PhotosData(opts) {
  'use strict'

  this.title = 'Photos of Our Work'
	this.url = 'photos'

  this.cta = {
    bg: 'slide07.jpg',
    header: 'Photos',
    subheader: 'Your Dream Pool is Our Business',
    links: {
      'More Info': '/',
      'FAQs': '/faq',
      'Special Offers': '/#open-modal'
    }
  }

  this.photos = {
    'pool-01': 'slide01.jpg',
    'pool-02': 'slide02.jpg',
    'pool-03': 'slide03.jpg',
    'pool-04': 'slide04.jpg',
    'pool-05': 'slide05.jpg',
    'pool-06': 'slide06.jpg',
    'pool-07': 'slide07.jpg',
    'pool-08': 'slide08.jpg',
    'pool-09': 'slide09.jpg',
    'pool-10': 'slide10.jpg',
    'pool-11': 'slide11.jpg',
    'pool-12': 'slide12.jpg',
    'pool-13': 'slide13.jpg',
    'pool-14': 'slide14.jpg',
    'pool-15': 'slide15.jpg',
    'pool-16': 'slide16.jpg',
    'pool-17': 'slide17.jpg',
    'pool-18': 'slide18.jpg',
    'pool-19': 'slide19.jpg',
    'pool-20': 'slide20.jpg',
    'pool-21': 'slide21.jpg',
    'pool-22': 'slide22.jpg',
    'pool-23': 'slide23.jpg',
    'pool-24': 'slide24.jpg',
    'pool-25': 'slide25.jpg',
    'pool-26': 'slide26.jpg',
    'pool-27': 'slide27.jpg',
    'pool-28': 'slide28.jpg',
    'pool-29': 'slide29.jpg',
    'pool-30': 'slide30.jpg',
    'pool-31': 'slide31.jpg',
    'pool-32': 'slide32.jpg',
    'pool-33': 'slide33.jpg',
    'pool-34': 'slide34.jpg',
    'pool-35': 'slide35.jpg',
    'pool-36': 'slide36.jpg',
    'pool-37': 'slide37.jpg',
    'pool-38': 'slide38.jpg',
    'pool-39': 'slide39.jpg',
    'pool-40': 'slide40.jpg',
    'pool-41': 'slide41.jpg',
    'pool-42': 'slide42.jpg',
    'pool-43': 'slide43.jpg',
    'pool-44': 'slide44.jpg',
    'pool-45': 'slide45.jpg',
    'pool-46': 'slide46.jpg',
    'pool-47': 'slide47.jpg',
    'pool-48': 'slide48.jpg',
    'pool-49': 'slide49.jpg',
    'pool-50': 'slide50.jpg',
    'pool-51': 'slide51.jpg',
    'pool-52': 'slide52.jpg',
    'pool-53': 'slide53.jpg',
    'pool-54': 'slide54.jpg',
    'pool-55': 'slide55.jpg',
    'pool-56': 'slide56.jpg',
    'pool-57': 'slide57.jpg',
    'pool-58': 'slide58.jpg',
    'pool-59': 'slide59.jpg'
  }

	this.info = {
		header: 'What We Do:',
		class: 'color-product-view',
		cards: [

			{
					title: 'Outdoor Living',
					image: 'slide59.jpg',
					body: 'For many people, the backyard has become the focal point for entertaining. As a result, most of our projects go way beyond "just a swimming pool."',
					caption: 'Discover more about the outdoor lifestyle.',
					anchor: {
						route: 'outdoor-living',
						text: 'Learn more'
					},
					bodySmall: 'Discover more about the outdoor lifestyle.'
			},

			{
					title: 'Financing',
					image: 'slide60.jpg',
					body: 'We have a team of lenders with money available right now for pool loans. If another builder or loan company has told you they can\'t help you, please give us a call.',
					bodySmall: 'Get info about our mortgage and financing plans.',
					anchor: {
						route: 'financing',
						text: 'Ask about financing'
					},
					caption: 'Get info about our mortgage and financing plans.'
			},

			{
					title: 'Swimming Pools',
					image: 'slide61.jpg',
					body: 'For a one-on-one consultation on your backyard oasis, give us a call at (972) 333-0714. One of our design specialists will be happy to help you.',
					bodySmall: 'Pools that we have designed and built for our clients.',
					anchor: {
						route: '#open-modal-contact',
						text: 'Contact us'
					},
					caption: 'Pools that we have designed and built for our clients.'
			}
		]
	}

}

