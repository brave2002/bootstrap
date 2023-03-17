$(function () {
        //点击菜单按钮切换
        $(".hdMenu").click(function(){
            $(".bodyBg").toggle()//点击菜单时，遮罩层出现
            $(this).toggleClass("active");//若有active，则删除，若没有则不删除
            $(".hdNav").slideToggle();
        })

        $(".bodyBg").click(function(){
            $(this).hide();//先把遮罩层隐藏
            $(".hdMenu").removeClass("active");
            $(".hdNav").slideUp();
        })

        //在导航栏处添加高亮显示
        var path=location.href.split('/')[location.href.split('/').length-1];
        $(".hdNav li a[href='"+path+"']").parent().addClass("active");


        // 监听页面的宽度
        $(window).resize(function () {
            if($(this).width()>975){
                $(".bodyBg").hide();//因为我已经在media中去除了.bodyBg的样式,所以加不加都无所谓
                $(".hdNav").show();
                $(".hdMenu").removeClass("active");
            }else{
                $(".hdNav").hide();
            }

        })

})