(function() {
    window.startTime = (new Date()).getTime();
    window.addEventListener('load', function(){
        this.document.getElementById('LoadTime').innerHTML = ((new Date).getTime() - this.window.startTime) + 'ms'
    });

})();