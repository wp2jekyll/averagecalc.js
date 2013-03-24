describe("Average Calculator", function(){

	var avg;

	beforeEach(function() {
			avg = new AverageCalculator();
		});


	it("should return the Average of the values provided", function() {
		avg.calc(2);
		expect(avg.calc(1)).toEqual(1.5)
	});


});