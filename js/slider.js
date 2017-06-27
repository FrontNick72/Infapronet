    	 $(document).ready(function() {
			$("#content-slider").lightSlider({

		        item:4,
		        slideMargin:30,
		        slideMove: 1,
		        pager: false,
		        adaptiveHeight: true,
		        responsive : [
		            {
		                breakpoint:1200,
		                settings: {
		                    item:4,
		                    slideMove:1,
		                    slideMargin:6,
		                  }
		            },
		              {
		                breakpoint:800,
		                settings: {
		                    item:3,
		                    slideMove:1,
		                    slideMargin:6,
		                  }
		            },
		            {
		                breakpoint:500,
		                settings: {
		                    item:2,
		                    slideMove:1,
		           			slideMargin:5
		                  }
		            }
		        ],
		        
		    });
		    $("#banks-slider").lightSlider({

		        item:6,
		        slideMargin:25,
		        slideMove: 1,
		        adaptiveHeight: true,
		        pager: false,

		        responsive : [
		            {
		                breakpoint:1200,
		                settings: {
		                    item:5,
		                    slideMove:1,
		                    slideMargin:25,
		                  }
		            },
		              {
		                breakpoint:950,
		                settings: {
		                    item:4,
		                    slideMove:1,
		                    slideMargin:51,
		                  }
		            },
		                {
		                breakpoint:750,
		                settings: {
		                    item:3,
		                    slideMove:1,
		                    slideMargin:2,
		                  }
		            },
		            {
		                breakpoint:500,
		                settings: {
		                    item:2,
		                    slideMove:2,
		           			slideMargin:2
		                 }
		            }
		        ],
		        
		    });		    
		});