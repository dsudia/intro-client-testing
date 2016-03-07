var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('should convert a grade between 90 and 100 inclusive to an A', function() {
    expect(letterGrader(95)).to.equal('A');
  });
  it('should convert a grade between 80 and 89 inclusive to a B', function() {
    expect(letterGrader(85)).to.equal('B');
  });
  it('should convert a grade between 70 and 79 inclusive to a C', function() {
    expect(letterGrader(85)).to.equal('C');
  });
  it('should convert a grade between 60 and 69 inclusive to a D', function() {
    expect(letterGrader(85)).to.equal('B');
  });
  it('should convert a grade between 0 and 59 inclusive to an F', function() {
    expect(letterGrader(85)).to.equal('F');
  });
});
