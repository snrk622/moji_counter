(function () {
    
    'use strict';

    let vm = new Vue({
        el: '#app',
        data: {
            textareaVal: '',
            goal: 0,
            class: 'red'
        },
        methods: {
            textCount: function () {
                return this.textareaVal.length;
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
            adjustHeight() {
                const textarea = this.$refs.adjust_textarea
                const resetHeight = new Promise(function (resolve) {
                    resolve(textarea.style.height = 'auto')
                });
                resetHeight.then(function () {
                    textarea.style.height = textarea.scrollHeight + 'px'
                });
            }
        }
    });

})();