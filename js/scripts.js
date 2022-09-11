$(function() {
    function cacluateLaunchTime() {
            var launchDateStr = "2022/07/16 11:00:00"; // timezone must be UTC + 0
            var launchDate = new Date(launchDateStr);
            launchDate.setTime( launchDate.getTime() - launchDate.getTimezoneOffset()*60*1000 );
            
            var currentDate = new Date();
            var diff = new Date(launchDate.getTime() - currentDate.getTime());
            
            if (diff > 0) {
                var milliseconds, seconds, minutes, hours, days;
                diff = Math.abs(diff);
                diff = (diff - (milliseconds = diff % 1000)) / 1000;
                diff = (diff - (seconds = diff % 60)) / 60;
                diff = (diff - (minutes = diff % 60)) / 60;
                days = (diff - (hours = diff % 24)) / 24;
                $(".clock .remaining-days").html((days + "").lpad("0", 2));
                $(".clock .remaining-hours").html((hours + "").lpad("0", 2));
                $(".clock .remaining-minutes").html((minutes + "").lpad("0", 2));
                $(".clock .remaining-seconds").html((seconds + "").lpad("0", 2));
            }
        }
        var calcLaunchTimeInterval = setInterval(cacluateLaunchTime, 1000);
		
	String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}
		
});
     