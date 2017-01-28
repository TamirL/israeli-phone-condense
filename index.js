var israelInternationalPrefix = "+972";

module.exports = function(phoneNumber) {
    var cleanNumber = phoneNumber.replace(/[^0-9+]/g, "");
    var localNumber = cleanNumber.startsWith(israelInternationalPrefix) ? "0" + cleanNumber.substring(4) : cleanNumber;
    return localNumber.replace("+", "");
};