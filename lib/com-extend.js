
Date.prototype.Format = function (fmt) {
	let o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (let k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

Object.prototype.toArray = function(){
	let arr = [];
	for(let key in this){
		if(!this.hasOwnProperty(key)) continue;
		arr.push(this[key]);
	}
	return arr;
}

Object.prototype.string = function(){
	return JSON.stringify(this);
}

Object.prototype.delete = function(key){
	delete this[key];
}

Object.prototype.clear = function(){
	for(let key in this){
		if(!this.hasOwnProperty(key)) continue;
		delete this[key];
	}
}

String.prototype.toArray = function(arg){
	return this.split(arg||'');
}

String.prototype.toJson = function(){
	return JSON.parse(this);
}

Array.prototype.remove = function(index){
	this.splice(index,1);
}

Array.prototype.clear = function(){
	this.length = 0;
}

module.exports = {};