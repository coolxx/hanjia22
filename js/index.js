$(function(){
    //main8一级选项卡控制
    $('.m8-btn-box li').each(function (index) {
        $(this).click(function () {
            for(var i=0;i<4;i++){
                $('.m8-btn-box li').eq(i).css('background-image','url("images/m17.png")')
            }
            $(this).css('background-image','url("images/m18.png")');
            $('.m8-show-box').hide().eq(index).show()
        })
    })
    //main8二级选项卡控制
    $('.m8-two-btn-box li').each(function (index) {
        $(this).click(function () {
            $('.m8-two-btn-box li').removeClass('act1').eq(index).addClass('act1')
            $('.show-box2').hide().eq(index).show();
            $('.two-show-box-mov').css('left','0px')
        })
    })
    //main8点击左右按钮滚动照片
    $('.to-left').click(function () {
        var $width=-3*$('.two-show-box-mov').children('li').width()+'px';
        if($('.two-show-box-mov').css('left')==$width){
            $('.two-show-box-mov').animate({'left':'0'},1000)
        }
    })
    $('.to-right').click(function () {
        var $width=-3*$('.two-show-box-mov').children('li').width()+'px';
        if($('.two-show-box-mov').css('left')=='0px'){
            $('.two-show-box-mov').animate({'left':$width},1000)
        }
    })
    $('.m7-btn p').each(function(index){
        $(this).click(function(){
            $('.m7-btn p').removeClass('on').eq(index).addClass('on');
            $('.m7-show').hide().eq(index).show()
        })
    })
})