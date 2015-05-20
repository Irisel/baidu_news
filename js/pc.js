/**
 * Created with PyCharm.
 * User: ge
 * Date: 15-5-20
 * Time: 上午2:28
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    var pc_init = function(){
        var is_ie = !($.support.leadingWhitespace);
        var selected_zone = undefined;

        function excahnge_zones(current){
            if(selected_zone)$(selected_zone).removeClass('active_zone');
            $(current).addClass('active_zone');
            selected_zone = current;
        }

        $("#activity").click(function(){
            var _this = this;
            excahnge_zones(_this);
		    $.scrollTo(900, 500);
	    });
	    $("#rules").click(function(){
            var _this = this;
            excahnge_zones(_this);
		    $.scrollTo(1258, 500);
	    });
	    $("#players").click(function(){
            var _this = this;
            excahnge_zones(_this);
            $.scrollTo(2484, 500);
	    });
	    $("#partners").click(function(){
            var _this = this;
            excahnge_zones(_this);
            $.scrollTo(4854, 500);
	    });
        function html_pdg(info){
            var img = is_ie?'<div class="player-head"><img class="player" src="images/players/':'<div class="player-head"><img class="player" src="images/players/10.png" data-original="images/players/';
            return img + info.img +
                '.png"></div><span class="player-name">'+ info.name +'</span><div class="player-title"><span>'+
                info.title + '</span></div><p class="player-p">'+ info.par +'</p>';
        }
        var players = {};
        players.players0 = [
            {
                id: 1,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 2,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 3,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 4,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 5,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 6,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 7,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 8,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 9,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 10,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 11,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 12,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 13,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 14,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 15,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 16,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 17,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 18,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 19,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 20,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 21,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 22,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 23,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 24,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 25,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 26,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 27,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 28,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 29,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 30,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            }
        ];

       players.players1 = [
            {
                id: 1,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 2,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 3,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 4,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 5,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 6,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 7,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 8,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 9,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 10,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 11,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 12,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 13,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 14,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 15,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 16,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 17,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 18,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 19,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            },
            {
                id: 20,
                img: 'gqj',
                name: '宫崎骏',
                title: '我是改变世界的项目',
                par: '宫崎骏1941年出生于的东京都文京区，在四个兄弟中排名第二，父亲是宫崎家族经营的宫崎航空兴学的职员。吉卜力工作室。'
            }
//            {
//                id: 21
//            },
//            {
//                id: 22
//            },
//            {
//                id: 23
//            },
//            {
//                id: 24
//            },
//            {
//                id: 25
//            },
//            {
//                id: 26
//            },
//            {
//                id: 27
//            },
//            {
//                id: 28
//            },
//            {
//                id: 29
//            },
//            {
//                id: 30
//            }
        ];

        function inlit_players(element, players){
              var list = $(element).find('td');
              for(var i=0;i<players.length;i++){
                  $(list[i]).html(html_pdg(players[i]));
              }
              if(!is_ie){
                $(element + ' .player').lazyload({
                    effect : "fadeIn"
                });
              }

        };
        $('.js-player-trigger').click(function(){
            var _this = $(this);
            if(_this.hasClass('active'))return;
            var no = _this.data('no');
            if(no=='players0'){
                $('#player0').show();
                $('#player1').hide();
            }else{
                $('#player1').show();
                $('#player0').hide();
            }
            $('.m5-trigger .active').removeClass('active');
            _this.addClass('active');
        });
        inlit_players('#player0', players.players0);
        inlit_players('#player1', players.players1);
        $('#player1').hide();
    };
    return {
        pc_init: pc_init
    }
});
