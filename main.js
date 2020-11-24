import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
import { AjaxRequest } from './util/api.js'
import { AjaxRequest_product } from './util/product.js'
import { AjaxRequest_ali } from './util/ali.js'
import { AjaxRequest_fresh } from './util/fresh.js'
Vue.prototype.$AjaxRequest = AjaxRequest
Vue.prototype.$AjaxRequest_product = AjaxRequest_product
Vue.prototype.$AjaxRequest_ali = AjaxRequest_ali
Vue.prototype.$AjaxRequest_fresh = AjaxRequest_fresh


import {
	_check_reg_user,
	_get_Wxapp_openid,
	_get_ali_user,
	_get_wx_user,
	_wxapp_pay,
	_wx_pay,
	_get_wxapp_user,
	_ali_pay,
	_final_wx_pay,
	_final_ali_pay,
	_final_wxapp_pay,
	} from './util/basic.js'
Vue.prototype.$Basic = {
	"_check_reg_user":_check_reg_user,
	'_get_Wxapp_openid':_get_Wxapp_openid,
	'_get_ali_user':_get_ali_user,
	'_get_wx_user':_get_wx_user,
	'_wxapp_pay':_wxapp_pay,
	'_wx_pay':_wx_pay,
	'_get_wxapp_user':_get_wxapp_user,
	'_ali_pay':_ali_pay,
	'_final_wx_pay':_final_wx_pay,
	'_final_ali_pay':_final_ali_pay,
	'_final_wxapp_pay':_final_wxapp_pay,
	}
 
/* import VConsole from 'vconsole'
const vConsole = new VConsole()
console.log(vConsole.version) */
 
import uView from 'uview-ui';
Vue.use(uView);
 
App.mpType = 'app'

const app = new Vue({
	store,
     ...App
})
app.$mount()
