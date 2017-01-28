var expect = require("chai").expect;
var israeliPhoneNormalize = require("../index");

describe("Israeli Phone Normalize", function() {
    it("should remove Israeli international prefix", function() {
        var normalized = israeliPhoneNormalize("+972521234567");
        expect(normalized).to.equal("0521234567");
    });

    it("should remove hyphen", function() {
        var normalized = israeliPhoneNormalize("052-1234567");
        expect(normalized).to.equal("0521234567");
    });

    it("should remove multiple hyphens", function() {
        var normalized = israeliPhoneNormalize("052-123-4567");
        expect(normalized).to.equal("0521234567");
    });

    it("should remove hyphens and Israeli international prefix", function() {
        var normalized = israeliPhoneNormalize("+972-52-123-4567");
        expect(normalized).to.equal("0521234567")
    });

    it("should remove irrelevant characters", function() {
        var normalized = israeliPhoneNormalize("(052) 123.4567 ");
        expect(normalized).to.equal("0521234567")
    });
});