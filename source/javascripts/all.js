$(function() {
  var currentPath = window.location.pathname;
  $(".page-sidebar a[href='" + currentPath + "']").addClass("active");
});

Array.prototype.shuffle = function() {
  var input = this;

  for (var i = input.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}
// var myloadstate = false;
$(document).ready(function() {
  //global varible about videoId,beforescroll
  var global = {
    videoId: null,
    beforescroll: 0,
    stateOfVideo: 1,
    browser: function() {
      var u = navigator.userAgent,
      app = navigator.appVersion;
      return {
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
        iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
        webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
        mqq: u.indexOf("MQQ") > -1
      };
    }()
  }

  //计算 copyright 时间
  var nowDate = new Date();
  $('#cr-end-time').text(nowDate.getFullYear());


  if (global.browser.trident) {
    $('html').addClass('gt-ie11');
    //实为 IE（内核） 浏览器判断 并无版本判断
  };



  //首屏向下滚动动效
  $('.scroll-down').click(function() {
    var firstsection_height = $('.hero-block').height();
    var offset_top = firstsection_height;
    $('body,html').animate({
      scrollTop: '100vh'
    }, 600);
  });
  $("#anchor").click(function(){
    $("html,body").animate({
      scrollTop:$($(this).attr("href")).offset().top + "px"
    },{duration:1000,easing:"swing"});
    return false;
  });

  //小于767下的，导航栏出现黑色遮罩的
  $('.burger-wrapper').click(function(){
    console.log(1);
    if($('.main-navblock').hasClass('navOpen')){
      $('body').removeClass('homeShow');
      $('.main-navblock').removeClass('navOpen');
      $('.burger').removeClass('active-burger');
    }else{
      $('body').addClass('homeShow');
      $('.main-navblock').addClass('navOpen');
      $('.burger').addClass('active-burger');
    }
  });
  //视频播放控制
  $('.play-btn').click(function() {
    $(this).hide();
    var video = $(this).parent().find("video");
    video[0].play();
    //console.log(video[0]);
    video.attr("controls", "controls");
  });
  //快速了解,黑色蒙版
  $('.type-shadow').mouseover(function () {
    $(this).addClass('shadow');
    const offsetleft=$('.type-pic').eq(7)[0].clientWidth;
    $('.masking').css('left',(offsetleft/2)-102+"px");
  });
  $('.type-shadow').mouseleave(function () {
    $(this).removeClass('shadow');
  });
  //Ci视频播放刷新
  $('.reover').click(function() {
    var video = $(this).parent().find("video");
    video[0].load();
    video[0].play();
  });

  //视频关闭控制(index页)
  
  $('.modal.modal-video button.close').click(function() {
    var video = $(global.videoId);
    video[0].pause();
    video.closest('.modal-dialog').removeClass("active");
    setTimeout(function() {
      $('.modal-backdrop').trigger('click');
    }, 800);
  });

  $('#video-btn').click(function() {
    var id = $(this).attr("data-source");
    global.videoId = id;
    var video = $(id);
    video[0].play();

    setTimeout(function() {
      video.closest('.modal-dialog').addClass("active");
    }, 100);
  })
  //导航欧洲杯图片变换
  function cup1(){
    $("#img1").css("display","none");
    $("#img2").css("display","block");
  }
  function cup2(){
    $("#img1").css("display","block");
    $("#img2").css("display","none");
  }
  setInterval(function(){
    cup1();
    setTimeout(function(){
      cup2();
    },2000);
  },4000);

  //解决移动端一直处于hover 状态
  document.body.addEventListener('touchstart',function(){});
  $("#platform-btn").click(function(){
    var $platformBtn =$(this);
    $('.platform-both').each(function(){
      if( $(this).css("display")=="block"){
        $(this).hide();
        $platformBtn.text("显示全部");
      }else if( $(this).css("display")=="none"){
        $(this).show();
        $platformBtn.text("显示部分");
      }
    });
  });
});
function setCookie(name,value,days,domain){
  var exp=new Date();
  exp.setTime(exp.getTime() + days*24*60*60*1000);
  var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString()+";path=/;domain="+domain;
}
function getCookie(name){
  var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr!=null){
    return unescape(arr[2]);
    return null;
  }
}
function delCookie(name){
  var exp=new Date();
  exp.setTime(exp.getTime()-1);
  var cval=getCookie(name);

  if(cval!=null){

    document.cookie=name+"="+cval+";expires="+exp.toGMTString();
  }
}

function from(){
 setCookie("from","ai-docs",1,".oneapm.com"); 
}
from();

function out(){
  if(window.location.pathname == '/' || window.location.pathname == '/index.html'){
    setTimeout(function () {
      $(".flagInfo").removeClass("flagshow");
    },300)
  }
  if(getCookie("out")!="no" && window.location.pathname !== '/' && window.location.pathname !== '/index.html'){

    setCookie("out","yes",1,"");
    setTimeout(function () {
      function setHeight() {
        var rightHeight=$(".flag-right").height();
        $(".flag-left").css("height",rightHeight+"px");
      }
      window.onresize=function () {
        setHeight();
      };
      $(".flagInfo").addClass("flagshow");
      $(".cl").click(function () {
        $(".flagInfo").removeClass("flagshow");
        setCookie("out","no",1,"");
      });
    },300)
  }
}
out();
window.onbeforeunload =  delCookie("out");

setTimeout(function () {
  $('.panel').click(function (e) {
    if(e.target.nodeName !== 'a'){
      console.log(this);
      $(this).toggleClass('active');
      $(this).siblings('div').map(function () {
        $(this).removeClass('active');
      });
    }
  });
  $(document).scroll(function () {
    if( $(window).scrollTop()>100){
      $('.return').addClass('open')
    }else {
      $('.return').removeClass('open')
    };
  });
  $('.page-body').scroll(function(){
    if($(this).scrollTop()>800){
      $('.return').addClass('open')
    }else {
      $('.return').removeClass('open')
    };
  });
  $('.return').click(function () {
    $('.page-body').animate({ scrollTop: 0 }, 500);
    $('html,body').animate({ scrollTop: 0 }, 500);
  })
  var panelHeight=$(document).height();
  var panelWidth=$(document).width();
  var sliderWidth=$('.page-sidebar').width()+1;
  var notesHeight=$('.notesContent').innerHeight();
  $('.notesHead').css('height',notesHeight+'px');
  $(".page-sidebar").css('height',panelHeight-96+'px');
  $(".page-body").css('height',(panelHeight-96)+'px');
  // if(panelWidth<976){
  //   $(".page-body").css('width',(panelWidth-sliderWidth+60)+'px');
  // }else if(976<=panelWidth<1184){
  //   $(".page-body").css('width',(panelWidth-sliderWidth+30)+'px');
  // }
  // if (panelWidth>1184){
  //   $(".page-body").css('width',(panelWidth-sliderWidth+16)+'px');
  // }
  window.onresize=function () {
    var panelHeight=$(document).height();
    var panelWidth=$(document).width();
    var sliderWidth=$('.page-sidebar').width()+1;
    // if(panelWidth<976){
    //   $(".page-body").css('width',(panelWidth-sliderWidth+60)+'px');
    // }else if(976<=panelWidth<1184){
    //   $(".page-body").css('width',(panelWidth-sliderWidth+30)+'px');
    // }
    // if(panelWidth>1184){
    //   $(".page-body").css('width',(panelWidth-sliderWidth+16)+'px');
    // }
    $(".page-sidebar").css('height',panelHeight-96+'px');
    $(".page-body").css('height',(panelHeight-96)+'px');
  };
  if(getCookie('from') !== undefined){
    $('#loginIn').attr('href','http://user.oneapm.com/pages/v2/login?from='+getCookie('from'));
    $('#signUp').attr('href','https://user.oneapm.com/pages/v2/signup?from='+getCookie('from'));
  }

},100);
