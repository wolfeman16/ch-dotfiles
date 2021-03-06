/**
 * Return the right preview value when using custom xtd zones along units type
 */
app.filter('xtdDataFilter', function() {

    var formatTime = function(seconds) {
        return Helper.secondsToHHMMSS(seconds, true);
    };

    return function(value, type) {
        var result = '';
        if (type === 'speed') {
            var mph = value * 0.621371192;
            result = mph.toFixed(2) + ' mph';
        } else if (type === 'pace') {
            result = formatTime(value) + '/km | ' + formatTime(value / 0.621371192) + '/mi';
        }
        if (_.isEmpty(result)) {
            return false;
        }
        return result;
    };
});
