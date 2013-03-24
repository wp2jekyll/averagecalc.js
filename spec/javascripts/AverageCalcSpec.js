describe("Average Calculator", function(){

	var avg;

	beforeEach(function() {
			avg = new AverageCalculator();
		});


	it("should return the Average of the values provided", function() {
		avg.calc(2);
		expect(avg.calc(1)).toEqual(1.5)
	});

	it("should not include less than 1 numbers", function() {
		avg.calc(6);
		avg.calc(4);
		expect(avg.calc(0)).toEqual(5);
	});

	it("should not overwrite the existing instance", function() {

		avg1 = new AverageCalculator();
		avg1.calc(3);
		avg.calc(4);

		expect(avg1.calc(3)).toEqual(3);
	});


});