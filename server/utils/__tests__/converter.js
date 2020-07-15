const converter = require("../converter") ;

test('convert F To C', function () {
    expect(converter.convertFToC(32)).toBe(0);
});

test('convert F To K', function () {
    expect(converter.convertFToK(0)).toBeCloseTo(255.37);
});
test('convert F To K', function () {
    expect(converter.convertFToK(-50)).toBeCloseTo(227.59);
});