module.exports = function(){
	this.title = 'First Blog Post';
	this.url = 'blog/post0';
	this.article = {
		title: 'Perfect Pools to Beat the Summer Heat',
		lead: 'Picture yourself spending a glorious week off in the private oasis of your backyard.',
		contents: []
	};
	this.metadata = {
		author: {
			name:'Andrew Jarrett',
			bio: 'Loves teh blogz'
		},
		// tags: [{title:'SEO',link:'blog/seo'},{title:'Writing',link:'blog/writing'},{title:'Tutorials',link:'blog/tuts'},{title:'Traffic',link:'blog/roadrage'}],
		bgimg: 'slide57.jpg',
		category: 'Summer',
		postid: 0,







		media: [
			{
				link: 'https://plus.google.com/share?url=http://www.sunraypoolstx.com',
				name: 'Google+',
				color: 'rgb(209, 72, 54)',
				icon: 'google-plus'
			},
			{
				link: 'https://twitter.com/home?status=http%3A//www.sunraypoolstx.com',
				name: 'Twitter',
				color: 'rgb(0, 172, 237)',
				icon: 'twitter'
			},
			{
				link: 'https://www.facebook.com/sharer/sharer.php?u=http%3A//sunraypoolstx.com/',
				name: 'Facebook',
				color: 'rgb(59, 89, 152)',
				icon: 'facebook'
			},
			{
				link: 'https://www.linkedin.com/shareArticle?mini=true&url=http%3A//sunraypoolstx.com/&title=&summary=&source=',
				name: 'Linkedin',
				color: 'rgb(0, 123, 182)',
				icon: 'linkedin'
			},
			{
				link: 'https://pinterest.com/pin/create/button/?url=&media=http%3A//sunraypoolstx.com/&description=',
				name: 'Pinterest',
				color: 'rgb(189, 8, 28)',
				icon: 'pinterest-p'
			},
			{
				link: 'mailto:diane@sunraypoolstx.com?&bcc=bob@sunraypoolstx.com&subject=I had a question about Sun Ray Pools...',
				name:'Email',
				color: 'rgb(153, 153, 153)',
				icon:'envelope'
			}
		]
	};
};