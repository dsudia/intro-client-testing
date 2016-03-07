var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Letter Grader', function() {
  it('should convert a grade between 90 and 100 inclusive to an A', function() {
    expect(letterGrader(95)).to.equal('A');
  });
  it('should convert a grade between 80 and 89 inclusive to a B', function() {
    expect(letterGrader(85)).to.equal('B');
  });
  it('should convert a grade between 70 and 79 inclusive to a C', function() {
    expect(letterGrader(75)).to.equal('C');
  });
  it('should convert a grade between 60 and 69 inclusive to a D', function() {
    expect(letterGrader(65)).to.equal('D');
  });
  it('should convert a grade between 0 and 59 inclusive to an F', function() {
    expect(letterGrader(55)).to.equal('F');
  });
});

describe('Average Scores', function() {
  it('should return the mean of the scores in an array', function() {
    expect(averageScores([90, 95, 87, 60])).to.equal(83);
  });
});

describe('Median Score', function() {
  it('should return the median of the scores in an array', function() {
    expect(medianScore([52, 80, 80, 86, 94])).to.equal(80);
  });
});
