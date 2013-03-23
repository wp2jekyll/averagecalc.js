	AverageCalculator = function() {
		
			var series = [];
			var avg = 0;
			function sumSeries() {
					a = 0;
					for (var i=0; i < series.length; i=i+1) {
						a += series[i];			
					};
					return a;	
				}

			return {
				calc: function(n) {
					if (typeof n === 'number' && n > 0) {
						series.push(n);					
					}

					avg = sumSeries() / series.length;
					console.log(avg, sumSeries(), series.length);
					return avg;				
				},

				getAvg: function() {
					return avg;
				},

				getSeries: function() {
					return series;
				}

			}


	};