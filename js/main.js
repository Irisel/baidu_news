$(function(){
        $('.share').click(function(e){
            $('.jiathis_button_' + $(e.target).data('share')).click();
        });
        var system ={
                win : false,
                mac : false,
                xll : false
        };
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        if(!(system.win||system.mac||system.xll)){
            $('.main1').height($('.main0').height());
            var main3 = $(".main3");
            $('.m3-bg4').css({'top': (main3.offset().top - 52) + 'px'});
            $('.m3-bg5').css({'top': (main3.offset().top + main3.height()) -210 + 'px'});
            require(['phone'], function (phone){
                phone.phone_init();
            });
        }else{
            require(['pc'], function (pc){
                pc.pc_init();
            })
        }

});