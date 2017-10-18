// JavaScript Document

/*
	字符串对象新功能：去除字符串两端的空格。
*/
String.prototype.trim = function(){
	var start,end;
	start = 0;
	end = this.length - 1;
				
	while(start<=end && this.charAt(start)==' '){
		start++;	
	}
	while(start<=end && this.charAt(end)==' '){
		end--;	
	}
					
	return this.substring(start,end+1);	
}