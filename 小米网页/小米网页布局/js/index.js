//定义变量，来控制显示和隐藏
var c=0;
//写一个函数，实现图片的切换的功能
function run(){
	c++;
	if(c==6){
		c=0;
	}
	
	$('#banner .banner-box>a.pic').eq(c).stop().fadeIn(50).siblings('.pic').fadeOut(50);
	$('#banner .banner-box>ul.circle>li').eq(c).css({'background':'white'})
	.siblings('li').css({'background':'#8d8d8d'});
}
//设置定时器
var timer=setInterval(run,1000);
//鼠标移入事件
$('#banner .banner-box').mouseenter(function(){
	//停止定时器
	clearInterval(timer);
})
//鼠标移除事件
$('#banner .banner-box').mouseleave(function(){
	//开启定时器
	timer=setInterval(run,1000);
})
//右边箭头点击事件
$('#banner .banner-box>.arrow-right').click(function(){
	c++;
	if(c==6){
		c=0;
	}
	$('#banner .banner-box>a.pic').eq(c).stop().fadeIn(50).siblings('.pic').fadeOut(50);
	$('#banner .banner-box>ul.circle>li').eq(c).css({'background':'white'})
	.siblings('li').css({'background':'#8d8d8d'});
})
//左边箭头点击事件
$('#banner .banner-box>.arrow-left').click(function(){
	c--;
	if(c==-1){
		c=5;
	}
	$('#banner .banner-box>a.pic').eq(c).stop().fadeIn(50).siblings('.pic').fadeOut(50);
	$('#banner .banner-box>ul.circle>li').eq(c).css({'background':'white'})
	.siblings('li').css({'background':'#8d8d8d'});
})
//鼠标移入小圆点的事件
$('#banner .banner-box>ul.circle>li').mouseenter(function(){
	c=$(this).index();
	$('#banner .banner-box>a.pic').eq(c).stop().fadeIn(50).siblings('.pic').fadeOut(50);
	$('#banner .banner-box>ul.circle>li').eq(c).css({'background':'white'})
	.siblings('li').css({'background':'#8d8d8d'});
})
$('#box-product .content').find('.left').mouseenter(function(){
	$(this).stop().animate({'top':'-2px'},500);
	$(this).addClass('box-shaw');
	
})
$('#box-product .content').find('.left').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},500);
	$(this).removeClass('box-shaw');
})
$('#box-product .content .right').find('ul li').mouseenter(function(){
	$(this).stop().animate({'top':'-2px'},500);
	$(this).addClass('yin');
})
$('#box-product .content .right').find('ul li').mouseleave(function(){
	$(this).removeClass('yin');
	$(this).stop().animate({'top':'0px'},500);
})
//倒计时
function count (){
	var new_time=new Date();
	var next_time=new Date(2018,5,30,18,59);
	var setInvaltime=next_time.getTime()-new_time.getTime();
	var remite=parseInt(setInvaltime/1000);
	//计算天数
	var day=parseInt(remite/(3600*24));
	var hour=parseInt((remite-day*3600*24)/3600);
	var minuts=parseInt((remite-day*3600*24-hour*3600)/60);
	var secound=parseInt(remite%60);
	function addcost (time) {
		if(time<10){
			time='0'+time;
		}
		return time;
	}
//	$('#wrapper .box').eq(0).html(addcost(day));
	$('#activ .box').eq(1).html(addcost(hour));
	$('#activ .box').eq(2).html(addcost(minuts));
	$('#activ .box').eq(3).html(addcost(secound));
}
count();
setInterval(count,1000);
 
//倒计时
//TAB切换

$('#house .title ul li').mouseenter(function(){
	var temp=$(this).index();
	$('#house .content .right').eq(temp).stop().show(20).siblings('.right').hide(20);
	$(this).addClass('border');
})
$('#house .title ul li').mouseleave(function(){

	$(this).removeClass('border');
})
//TAB切换
//鼠标移到左边
$('#house .content').find('.content_left a').mouseenter(function(){
	$(this).stop().animate({'margin-top':'-2px'},500);
	$(this).addClass('box-shaw');
})
$('#house .content').find('.content_left a').mouseleave(function(){
	$(this).stop().animate({'margin-top':'0px'},500);
	$(this).removeClass('box-shaw');
})
//鼠标移到左边
//鼠标移到ul li上
//$('#house .content_right').find('ul li').mouseenter(function(){
//	$(this).stop().animate({'margin-top':'-2px'},500);
//	$(this).addClass('box-shaw');
//})
//$('#house .content_right').find('ul li').mouseleave(function(){
//	$(this).stop().animate({'margin-top':'0px'},500);
//	$(this).removeClass('box-shaw');
//})
//鼠标移到ul li上




