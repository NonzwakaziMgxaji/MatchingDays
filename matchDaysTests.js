describe('The matching days factory function', function () {
  it("should return Wednesday for the date 29 June 1994", function () {
    var test = matchingDaysFactory();
    test.setDate1("1994-06-29");
    assert.equal(test.getDate1(), "Wednesday");
  });

  it("should return Saturday for the date 25 June 1966.", function () {
    var test = matchingDaysFactory();
    test.setDate2("1966-06-25");
    assert.equal(test.getDate2(), "Saturday");
  });

  it("should return Tuesday for the date 27 June 2006.", function () {
    var test = matchingDaysFactory();
    test.setDate2("2006-06-27");
    assert.equal(test.getDate2(), "Tuesday");
  });

  it("should return true to prove that the dates 2021-06-01 and 2021-06-08 fall on the same day", function () {
    var test = matchingDaysFactory();
    test.setDate1("2021-06-01");
    test.setDate2("2021-06-08");
    assert.equal(test.matchDates(), true);
  });

  it("should return false to prove that the dates 2021-06-03 and 2021-06-07 fall on different days", function () {
    var test = matchingDaysFactory();
    test.setDate1("2021-06-03");
    test.setDate2("2021-06-07");
    assert.equal(test.matchDates(), false);
  });
});