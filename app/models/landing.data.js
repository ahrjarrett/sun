module.exports = function LandingData(opts) {
  
  this.title = 'Outdoor Living';
	this.url = 'outdoor-living';

  this.cta = {
    bg: 'cta01.jpg',
    header: 'Outdoor Living',
    subheader: 'Your Lifestyle is Our Profession',
    links: {
      'More Info': '/',
      'FAQs': '/faq',
      'Special Offers': '/#open-modal'
    }
  };

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
					bodySmall: 'Get info about our new mortgage and financing packages.',
					anchor: {
						route: 'financing',
						text: 'Ask about financing'
					},
					caption: 'Get info about our new mortgage and financing packages.'
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
	};

};

