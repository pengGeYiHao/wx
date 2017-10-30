/*
 * 配置文件
 * 
 */
'use strict'

var path = require('path');
var util = require('./libs/util');

var wechat_file = path.join(__dirname,'./config/wechat.txt');

var config = {
	wechat:{
		appID:'wx99557d056dd52d25',
		appSecret:'1c6a289c4793fc0c70bca6d02fafde3e',
		token:'fangpeng',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken:function(data){
			return util.writeFileAsync(wechat_file,data);
		},
	}
};

module.exports = config;