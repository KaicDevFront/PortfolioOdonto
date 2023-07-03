$(function(){
	$('.mosaico .container .mosaico-wraper').slick({
		centerMode: false,
		slidesToShow: 6,
		arrows: false,
		responsive:[{

			breakpoint: 800,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 3
				}
		},

		{
			breakpoint: 600,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 2
				}
		},

		{
			breakpoint: 460,
				settings:{
					arrows: false,
					centerMode: true,
					slidesToShow: 1
				}
		}
		]
		
	});

	$('.tratamentos .container').slick({
		centerMode: false,
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive:[
		{

			breakpoint: 800,
				settings:{
					arrows:false,
					centerMode:false,
					dots:true,
					infinite:false,
					slidesToShow:2
			}
		},
		{
			breakpoint: 580,
				settings:{
					arrows:false,
					centerMode:false,
					dots:true,
					infinite:false,
					slidesToShow:1
				}
		}
		]			
	});

	$('.depoimentos .container').slick({
		centerMode: false,
		slidesToShow: 1,
		arrows: false,
		dots:true,
		infinite: false,
	});

	$('.social .mosaico-social').slick({
		arrows:false,
		centerMode:false,
		slidesToShow:9,
		infinite:false,
		responsive:[
		{
			breakpoint:1440,
				settings:{
					arrows:false,
					centerMode:true,
					infinite:true,
					slidesToShow:6
				}
		},
		{
			breakpoint:1024,
				settings:{
					arrows:false,
					centerMode:true,
					infinite:true,
					slidesToShow:4
				}
		},
		{
			breakpoint:768,
				settings:{
					arrows:false,
					centerMode:true,
					infinite:true,
					slidesToShow:3
				}
		},
		{
			breakpoint:568,
				settings:{
					arrows:false,
					centerMode:true,
					infinite:true,
					slidesToShow:2
				}
		},
		{
			breakpoint:520,
			settings:{
					arrows:false,
					centerMode:true,
					infinite:true,
					slidesToShow:1
			}
		}
		]
	});
});