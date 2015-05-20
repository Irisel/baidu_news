/**
 * Created with PyCharm.
 * User: ge
 * Date: 15-5-15
 * Time: 下午8:44
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    var phone_init = function(){
        var selected_zone = undefined;
        var panel_isopen = false;
        $('.phone-trigger').click(function(){
            if(panel_isopen){
                $('.panel-select').hide();
            }else{
                $('.panel-select').show();
            }
            panel_isopen = !panel_isopen;
        });

        function excahnge_zones(current){
            if(selected_zone)$(selected_zone).removeClass('active_zone');
            $(current).addClass('active_zone');
            selected_zone = current;
        }
        $("#phone_activity").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main2 = $('#main2').offset().top;
		    $.scrollTo(main2, 500);
	    });
	    $("#phone_rules").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var main3 = $('#main3').offset().top;
		    $.scrollTo(main3, 500);
	    });
	    $("#phone_players").click(function(){
            var _this = this;
            excahnge_zones(_this);
            $.scrollTo(2484, 500);
	    });
	    $("#phone_partners").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var phone_footer = $('.phone-footer').offset().top;
            $.scrollTo(phone_footer, 500);
	    });
    };
    return {
        phone_init: phone_init
    }
})