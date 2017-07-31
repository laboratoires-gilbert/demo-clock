function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var app = new Vue({
    el: '#app',
    computed: {
        nbSecG: function() {
            return this.actualTime.split(':')[2] * 1;
        },
        nbSecR: function() {
            return 60 - this.nbSecG;
        },
        nbMinG: function() {
            return this.actualTime.split(':')[1] * 1;
        },
        nbMinR: function() {
            return 60 - this.nbMinG;

        },
        nbHrsG: function() {
            return this.actualTime.split(':')[0] * 1;
        },
        nbHrsR: function() {
            return 24 - this.nbHrsG;
        },
    },
    mounted:  function() {
        var v = this;
        setInterval(function() {
            var today = new Date();
            var h = addZero(today.getHours());
            var m = addZero(today.getMinutes());
            var s = addZero(today.getSeconds());
            v.actualTime = h+':'+m+':'+s;
        }, 1000);
    },
    data: {
        actualTime : '00:00:00',
    }
});

