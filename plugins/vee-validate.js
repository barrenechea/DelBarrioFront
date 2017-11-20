import Vue from 'vue'
import VeeValidate from 'vee-validate'
import moment from 'moment'

VeeValidate.Validator.installDateTimeValidators(moment)

Vue.use(VeeValidate)
