$(function() {

	var imgDir = './images/'
	var hero0 = new Image()
	var hero1 = new Image()
	var hero2 = new Image()
	var hero3 = new Image()
	var quote0 = new Image()
	var quote1 = new Image()
	var quote2 = new Image()
	var quote3 = new Image()
	var quote4 = new Image()
	var bgStart = 'background: url('
	var bgEnd = ');'
	var bgStyles = 'background-size: cover; background-position: center center; transition: all 0.4s ease;'

	hero0.src = imgDir + 'main0.jpg'
	hero1.src = imgDir + 'main1.jpg'
	hero2.src = imgDir + 'main2.jpg'
	hero3.src = imgDir + 'main3.jpg'

	quote0.text = 'quote0.text'
	quote1.text = 'quote1.text'
	quote3.text = 'quote2.text'
	quote2.text = 'quote3.text'
	quote4.text = 'quote4.text'

	var special = {}
	var special0 = new Image()
	var special1 = new Image()
	var special2 = new Image()
	var special3 = new Image()
	special0.src = imgDir + 'slide58.jpg'
	special1.src = imgDir + 'slide57.jpg'
	special2.src = imgDir + 'slide56.jpg'
	special3.src = imgDir + 'slide55.jpg'
	special.head = ['Special Features.','Eco-Friendly.','Hands-Free.','Cruise Control']

	var Data = {
		'init0': {
			'hero': hero0,
			'header': 'Sun Ray Pools',
			'bannerA': 'Download the Guide &nbsp;&rarr;',
			'bannerB': '10 Tips for a Perfect Pool'
		},
		'init1': {
			// 'hero': hero1,
			'header': 'Relax.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': '11 Tricks for a Smooth Deploy(ment)'
		},
		'init2': {
			// 'hero': hero2,
			'header': 'Fire & Water.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': 'The 12 Secrets of Architecture'
		},
		'init3': {
			// 'hero': hero3,
			'header': 'Outdoor Living.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': '13 Hacks for a Summer Bod'
		}
	}

	$('.mobile-menu').click(function(){
		if ($('#nav-mobile').hasClass('collapse-it')) {
			$('#nav-mobile').removeClass('collapse-it')
		} else {
			$('#nav-mobile').addClass('collapse-it')
		}
	})


	$('#hero0').on('click', function(e){
		e.preventDefault()
		$('#hero').attr('style',
			bgStart + hero0.src + bgEnd + bgStyles
		)
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
			Data.init0.header
		+ '</h1>')
    $('#see-photos-type').replaceWith('<span id="see-photos-type">pools</span>')
    $('#see-photos-anchor').attr('href', '/pools')
	})

	$('#hero1').on('click', function(e){
		e.preventDefault()
		$('#hero').attr('style',
			bgStart + hero1.src + bgEnd + bgStyles
		)
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
			Data.init1.header
		+ '</h1>')
    $('#see-photos-type').replaceWith('<span id="see-photos-type">spas</span>')
    $('#see-photos-anchor').attr('href', '/spas')
	})

	$('#hero2').on('click', function(e){
		e.preventDefault()

		$('#hero').attr('style',
			bgStart + hero2.src + bgEnd + bgStyles
		)
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
			Data.init2.header
		+ '</h1>')
    $('#see-photos-type').replaceWith('<span id="see-photos-type">firepits</span>')
    $('#see-photos-anchor').attr('href', '/kitchens')
	})

	$('#hero3').on('click', function(e){
		e.preventDefault()
		$('#hero').attr('style',
			bgStart + hero3.src + bgEnd + bgStyles
		)
		$('#hero-header').replaceWith(
			'<h1 id="hero-header">' +
			Data.init3.header
			+ '</h1>'
		)
    $('#see-photos-type').replaceWith('<span id="see-photos-type">decks</span>')
    $('#see-photos-anchor').attr('href', '/decks')
	})

	$('#hero-ul a').on('click', function(){
		$(this).removeClass('no-after')
		$('#hero-ul a.active-btn').addClass('no-after')
		$('a.active-btn').removeClass('active-btn')
		$(this).addClass('active-btn')
	})



	$('#special0').on('click', function(e){
		e.preventDefault()
		$('#special').attr('style',
			bgStart + special0.src + bgEnd + bgStyles
		)
		$('#special-header').replaceWith('<h1 id="special-header">' +
			special.head[0]
			//Data.init0.header
		+ '</h1>')
	})
	$('#special1').on('click', function(e){
		e.preventDefault()
		$('#special').attr('style',
			bgStart + special1.src + bgEnd + bgStyles
		)
		$('#special-header').replaceWith('<h1 id="special-header">' +
			special.head[1]
		+ '</h1>')
	})
	$('#special2').on('click', function(e){
		e.preventDefault()

		$('#special').attr('style',
			bgStart + special2.src + bgEnd + bgStyles
		)
		$('#special-header').replaceWith('<h1 id="special-header">' +
			special.head[2]
		+ '</h1>')
	})
	$('#special3').on('click', function(e){
		e.preventDefault()
		$('#special').attr('style',
			bgStart + special3.src + bgEnd + bgStyles
		)
		$('#special-header').replaceWith(
			'<h1 id="special-header">' +
			special.head[3]
			+ '</h1>'
		)
	})
	$('#special-ul a').on('click', function(){
		$(this).removeClass('no-after')
		$('#special-ul a.active-btn').addClass('no-after')
		$('a.active-btn').removeClass('active-btn')
		$(this).addClass('active-btn')
	})

	$('#quote0').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Bob and Diane made the pool installation an awesome experience.”</p>')
		$('#theheads').replaceWith('<p id="theheads">Daryl & Gretta, Rowlett</p>')
	})

	$('#quote1').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“We refer absolutely no one else for new pools and for pool owners with repairs.”</p>')
		$('#theheads').replaceWith('<p id="theheads">David & Kelly, McKinney</p>')
	})

	$('#quote2').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Bob and Diane did an amazing job and from day one to the end of the pool, they were always available when I needed them.”</p>')
		$('#theheads').replaceWith('<p id="theheads">Dave & Sharon, Terrell</p>')
	})

	$('#quote3').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Working with Bob and Diane has been a complete joy! We are completely thrilled with the outcome of our pool!”</p>')
		$('#theheads').replaceWith('<p id="theheads">David & Erin, Talty</p>')
	})

	$('#quote4').on('click', function(){
		$('#thewords').replaceWith('<p id="thewords">“Bob and Diane are great to work with. Their attention to detail is flawless.”</p>')
		$('#theheads').replaceWith('<p id="theheads">Delores D., Rowlett</h6>')
	})

	$('a.head').on('click', function(){
		$('.head.active').removeClass('active')
		$(this).addClass('active')
	})

	$('.showcase-item').on('click', function(){
		$('.active-card').removeClass('active-card')
		$(this).addClass('active-card')
	})

	$(".lightbox").fancybox({
		padding : 0,
		nextEffect  : 'fade',
		prevEffect  : 'fade'
	})

	var skycons = new Skycons({
  	'color':'#0074E4',
  	'resizeClear': true
  }),
    list  = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ],
    i
	for(i = list.length; i--; )
	  skycons.set(list[i], list[i])
	skycons.play()

  var tempDiv = document.getElementById('temperature')
  var iconDiv = document.querySelector('.weather-icon')

  var request = $.ajax({
    url: 'weather',
    dataType: 'json'
  })

  request.done(function(data){
    var temperature = Math.round(data.temperature)
    var icon = data.icon
    if(tempDiv) tempDiv.innerHTML = temperature + '&#176;'
    skycons.set('weather-icon', icon)
  })

  request.fail(function(){
    console.log('Error!')
  })
} )
