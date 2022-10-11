$(document).ready(function(){
    $('#close').click(function(){
        $('#popup').css({"display":"none"})
    })
    $('#popup_text').click(function(){
        $('#popup').css({"display":"none"})
    })
    $('#header2_menu>li').mouseenter(function(){
        $(this).children('.sub_wrap').stop().slideDown(400)
    })
    $('#header2_menu>li').mouseleave(function(){
        $(this).children('.sub_wrap').stop().slideUp(400)
    })
    $('#attraction_bt1').click(function(){
        $(this).css({'border':'2px solid #550adf','color':'#550adf','font-weight':'600'}).siblings().css({'border':'1px solid #c4c4c4','color':'#686868','font-weight':'400'})
        $('#attraction_box1').show().siblings().hide()
    })
    $('#attraction_bt2').click(function(){
        $(this).css({'border':'2px solid #550adf','color':'#550adf','font-weight':'600'}).siblings().css({'border':'1px solid #c4c4c4','color':'#686868','font-weight':'400'})
        $('#attraction_box2').show().siblings().hide()
    })
    $('#attraction_bt3').click(function(){
        $(this).css({'border':'2px solid #550adf','color':'#550adf','font-weight':'600'}).siblings().css({'border':'1px solid #c4c4c4','color':'#686868','font-weight':'400'})
        $('#attraction_box3').show().siblings().hide()
    })
    $('#operating_time').delay(200).animate({'marginTop':'0','opacity':'1'},400)

    //스크롤 시작
    $(window).scroll(function(){
        sc = $(window).scrollTop();
        if(sc>=600){
            $('#event>h2').delay(400).animate({'marginTop':'120px','opacity':'1'},600)
            $('#event>h4').delay(550).animate({'marginTop':'25px','opacity':'1'},600)
            $('#event>ul').delay(700).animate({'marginTop':'60px','opacity':'1'},600)
            $('#event>button').delay(850).animate({'marginTop':'60px','opacity':'1'},600)
        }
        if(sc>=1600){
            $('#parade>h2').delay(400).animate({'marginTop':'120px','opacity':'1'},600)
            $('#parade>p').delay(550).animate({'marginTop':'30px','opacity':'1'},600)
            $('#parade>ul').delay(700).animate({'marginTop':'100px','opacity':'1'},600)
        }
        if(sc>=2800){
            $('#attraction>h2').animate({'marginTop':'100px','opacity':'1'},600)
            $('#attraction_bt').delay(550).animate({'marginTop':'30px','opacity':'1'},600)
            $('#attraction ul').delay(700).animate({'marginTop':'50px','opacity':'1'},600)
        }
        if(sc>=4000){
            $('#special_title>h2').animate({'marginTop':'100px','opacity':'1'},600)
            $('#special_title>h3').delay(550).animate({'marginTop':'-5px','opacity':'1'},600)
            $('#special_title>p').delay(600).animate({'marginTop':'100px','opacity':'1'},600)
            $('#special_list').delay(700).animate({'marginTop':'0px','opacity':'1'},600)
        }
        if(sc<4439){
            $('#quick').css({'position':'fixed','bottom':'60px'})
        }
        else if(sc>=4439){
            $('#quick').css({'position':'absolute','bottom':'450px'})
        }
    })
    

    $('#slide_btn>ul>li').click(function(){
        $(this).css({'opacity':'1'}).children('img').attr({'src':'images/icons/imgRoll_indi_on.png'})
        $(this).siblings('li').css({'opacity':'0.3'}).children('img').attr({'src':'images/icons/imgRoll_indi.png'})
        $('#slide_imgbox').animate({'marginLeft':$(this).index()*-100+'%'})
    })
    $('#footer_top_bt').click(function(){
        $('body,html').animate({'scrollTop':'0'},500)
    })
})