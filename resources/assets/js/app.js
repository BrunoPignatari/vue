import axios from 'axios'
import Vue from 'vue'
import lodash from 'lodash'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

import HitoLogin from './components/login/main.vue'

const app = new Vue({
    el: '#app',
    components: {
        HitoLogin
    }

});
