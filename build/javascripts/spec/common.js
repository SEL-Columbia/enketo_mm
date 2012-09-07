(function() {

  describe("common: a hello world test", function() {
    it("can add one plus one", function() {
      expect(1 + 1).toBe(2);
      return expect(1 + 3).not.toBe(5);
    });
    return it("can fail", function() {
      return expect(1 + 1).toBe(10);
    });
  });

}).call(this);
