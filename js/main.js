(function () {
    
    'use strict';

    let vm = new Vue({
        el: '#app',
        data: {
            text: '',
            goal: 0,
            class: 'red'
        },
        methods: {
            textCount: function () {
                return this.text.length;
            },
            percentage: function () {
                if (this.goal !== 0) {
                    return Math.floor((this.textCount() / this.goal) * 100);
                }
                return 0;
            },
            rate: function () {
                if (this.goal !== 0) {
                    return (this.textCount() / this.goal * 100);
                }
                return 0;
            },
            message: function () {
                if (this.percentage() < 20) {
                    return 'スタート！';
                } else if (this.percentage() < 40) {
                    return '頑張れ！';
                } else if (this.percentage() < 60) {
                    return 'いいぞ〜';
                } else if (this.percentage() < 80) {
                    return '眠くなってきたね...';
                } else if (this.percentage() < 100) {
                    return 'ラストスパート';
                } else if (this.percentage() >= 100) {
                    return 'お疲れ！'
                } else {
                    return;
                }
            }
        }
    });

})();