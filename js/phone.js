/**
 * Created with PyCharm.
 * User: ge
 * Date: 15-5-15
 * Time: 下午8:44
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    var phone_init = function(){
        var zepto = window.Zepto;
        var screen_height = $('.main0').height();
        var screen_width = $('.main0').width();
        $('.main1').height(screen_height);
        $('.phone-main5').height(screen_height);
        var main3 = $(".main3");
        $('.m3-bg4').css({'top': (main3.offset().top - 52) + 'px'});
        $('.m3-bg5').css({'top': (main3.offset().top + main3.height()) -210 + 'px'});
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
            $('.panel-select').hide();
            panel_isopen = !panel_isopen;
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
            var main5 = $('.phone-main5').offset().top - 38;
            $.scrollTo(main5, 500);
	    });
	    $("#phone_partners").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var phone_footer = $('.phone-footer').offset().top;
            $.scrollTo(phone_footer, 500);
	    });

        var players = [
            {                id: 1,
                img: 'gqj',
                name: '李晓光',
                title: '生活里',
                par: '生活里致力于本地生活服务的深度整合与智能推荐，让每个人都享受到更美好的生活。'},
            {                id: 2,
                img: 'gqj',
                name: '苗刚',
                title: '鸭梨心理',
                par: '心理疾病和心理健康管理APP，建立O+O的心理疾病和心理健康管理平台。'},
            {                id: 3,
                img: 'gqj',
                name: '马庆伟',
                title: '临床质谱开启精准医学新时代',
                par: 'MaldiTOF是2002年诺贝尔化学奖的得奖技术，在2013年得到美国FDA批准可以用于微生物的快速鉴定，2014年被FDA批准用于基因诊断，目前临床质谱技术在无创产前RHD血型检测，新生儿耳聋基因检测，循环肿瘤DNA检测等等领域都有巨大应用潜力，我公司的ClinTOF质谱在2014年被CFDA批准用于临床检测，是国内唯一被CFDA批准的质谱平台，我们拥有相关发明专利超过30项，获得科技部2项重大专项支持，利用ClinTOF技术发表SCI论文超过10篇，被美国NACB（美国临床生化科学研究院）授予杰出论文摘要奖，被Frost&Suliwen评为2014体外诊断行业产品创新奖。'},
            {                id: 4,
                img: 'gqj',
                name: '李厚辰',
                title: '享借',
                par: '享借是人与人之间自由借用好东西的社区，你可以上传或借到别人的物品。在押金与信用机制的保证下，借用是安全的。享借是免费借用的，与物品的使用场景（技能或兴趣）高度关联。用户将借用看做一种社区或社群的方式。'},
            {                id: 5,
                img: 'gqj',
                name: '陈拯民',
                title: '星谷实验室',
                par: '星谷实验室开发的电机，其功率密度是国际市场上最高，相同重量下星谷的电机是Tesla汽车电机功率的2.5至3倍。有三点重要优势：1、功率密度（每公斤重量电机能够产生的功率）能做到2.5~4KW/KG，国内一线电机水平是0.8KW/KG，特斯拉汽车采用的富田电机是1.6KW/KG。2、星谷电机效率高，能做到96%~97.5%，市场上主流水平是82%~94%。3、成本低。星谷电机成本比传统感应电机低10%~30%。电机企业毛利润5%左右，如果节约10%的成本，企业利润就提升3倍。'},
           {                id: 7,
                img: 'gqj',
                name: '王猛',
                title: 'FIR.im',
                par: 'FIR.im 为开发者提供极速应用测试发布、实时崩溃分析、邀请码一键生成管理等一系列开发测试效率工具服务。'},
            {                id: 9,
                img: 'gqj',
                name: '陈坤极',
                title: '超级表格',
                par: '做一款基于互联网的创新表格，让全球10亿Excel用户多了一个选择。超级表格是一个轻量、可协作的“在线Excel”，协作性远胜Excel。同时也是在线表单，用于数据的收集、处理和共享。'},
            {                id: 13,
                img: 'gqj',
                name: '皇甫珊欣',
                title: '巴别鸟',
                par: '巴别鸟是一款可以快速对图片及PDF进行协同批注及讨论的工具，在移动端支持语音批注。 围绕图稿完成工作。'},
            {                id: 16,
                img: 'gqj',
                name: '伏英娜',
                title: 'appMagics哈图',
                par: '超现实体验社交，让手机上的社交体验更贴近现实和娱乐化，更具参与和沉浸感，让每个人都能成为生活的魔法师，共创精彩世界。appMagics是一家硅谷范儿、胸怀梦想的创业公司，我们在把世界领先的虚拟现实+增强现实，面部识别和2D/3D图形图像算法等领域的高新技术运用于面向移动互联网消费者市场的产品之中，进行融合应用和游戏，工具及社交的全新探索和尝试。'},
            {                id: 19,
                img: 'gqj',
                name: '赵锦鹏',
                title: '水果无忧',
                par: '水果无忧是专注于为线下B端实体店解决水果采购难，打通供应链，及实现互联网化服务的移动应用。'},
           {                id: 21,
                img: 'gqj',
                name: '刘阳',
                title: '星空果（http://xkguo.com）',
                par: '低成本可重复印刷电子纸采用电子墨水技术，使用印刷的方式取代电路驱动的方式（如Kindle），因此具有超低成本、可重复印刷、使用过程中不用电等优势。'},
            {                id: 24,
                img: 'gqj',
                name: '刘永青',
                title: '汇采通',
                par: '降低企业采购成本的利器、面向中小企业的电子采购云服务系统，实现网上询比价、网上竞价、招投标等多种比选供应商的采购方式。'},
            {                id: 26,
                img: 'gqj',
                name: '张帅',
                title: '请出价',
                par: '用买家出价来革卖家主导的老商业秩序的命，革新60亿人的交易陋习，汇集C端出价需求，用B端柔性供应链的方式来满足,未来没有需求就没有买卖。'},
            {                id: 27,
                img: 'gqj',
                name: '翟强',
                title: 'Grush',
                par: 'GRUSH智能牙刷，是一个智能硬件与移动互联网范畴的创业项目。通过将内含传感器芯片的牙刷与智能手机相连，让刷牙变得更加有趣、精准。商业模式从硬件销售、APP STORE到O2O，逐步升级，商业前景十分广阔。'},
            {                id: 28,
                img: 'gqj',
                name: '许超前',
                title: '比特兄弟',
                par: '分布式办公场景下的沟通和协作平台。'},
             {                id: 29,
                img: 'gqj',
                name: '刘征',
                title: 'BearyChat',
                par: '「BearyChat」是一款面向团队的沟通工具，通过工作信息的快速汇集和精准推送，帮助团队升华信息价值，提升工作效率。   '},
             {                id: 30,
                img: 'gqj',
                name: '李俊',
                title: '成都福际生物技术',
                par: '福际团队基于自主研发的Direct PCR 技术，革命性的将传统两步法PCR改为一步法，开发出填补市场空白的直接PCR/qPCR系列试剂盒。'},
             {                id: 33,
                img: 'gqj',
                name: '沈力',
                title: '光辉城市',
                par: '光辉城市，专注于建筑设计行业产品革新的互联网公司，将VR（虚拟现实）和AR（增强现实）技术在建筑设计领域产品化和免费化，给设计师提供全新的、可互动的方案汇报体验'},
             {                id: 34,
                img: 'gqj',
                name: '蔡亮',
                title: 'Autobot',
                par: '车车智能（AutoBot）是一家提供汽车移动互联网解决方案的科技公司。通过系列车载智能硬件产品和简便的 App 保护和管理你的汽车。利用互联网服务+硬件的丰富产品线，为个人用户提供驾驶场景下的移动互联网服务，让每辆车都能成为智能汽车。'},
             {                id: 35,
                img: 'gqj',
                name: '刘涛',
                title: '住宅公园',
                par: '住宅公园是国内首家专注于宅基地、旅游观光、休闲度假、新农村建设用房的综合服务平台，主要业务是新型房屋推广与建设全产业链服务，通过标准化设计、工厂化生产、装配式施工的自建房全流程梳理，对原有的渠道化销售模式进行平台化改造，降低新型房屋的价格，使广大农村自建房愿意用新型房屋，用的起新型房屋。'},
             {                id: 36,
                img: 'gqj',
                name: '万勇',
                title: 'e伴',
                par: 'e伴是第一个老人行为识别及亲情关爱服务系统，以智能硬件和手机软件为工具，替儿女照看老人生活行为状态。'},
             {                id: 37,
                img: 'gqj',
                name: '魏晨',
                title: '海妖情绪识别引擎',
                par: 'EmoKit ，全球最好的情绪识别免费API；EQ4AI，让僵尸机器，变成大白。语音、心率、计步、呼吸、笔迹等体征识别情绪，匹配音乐等内容。'},
             {                id: 38,
                img: 'gqj',
                name: '黄仁志',
                title: '辰宜大脑计划',
                par: '辰宜超级大脑计划是基于思维科学理论、关系数学、演绎数学、时间数学与立体计算及数据链技术的超级人工智能演进计划。'},
             {                id: 39,
                img: 'gqj',
                name: '潘滢',
                title: '探探',
                par: '改变中国年轻人的相遇方式。'},
             {                id: 40,
                img: 'gqj',
                name: '李浅',
                title: 'Bionic cough simulator',
                par: '一种创新的、重症呼吸治疗设备，用于插管呼吸机病人，国际领先技术，多家三甲医院主任认可。'},
             {                id: 42,
                img: 'gqj',
                name: '陈震',
                title: '速感科技（Ulbrain机器人操作系统）',
                par: '我们研发第一代深度定制的通用机器人操作系统，让智能设备拥有感知能力，我们将进行一场机器人革命！'},
             {                id: 43,
                img: 'gqj',
                name: '胡宇翔',
                title: '奥秘城市o2o游戏',
                par: '奥秘城市是一款在现实中打怪升级的游戏。APP端发布任务，导航任务，角色养成与组队社交，在城市各个商户完成不同类型的游戏任务。。'},
              {                id: 44,
                img: 'gqj',
                name: '赫梓含',
                title: '墨刀',
                par: '墨刀是一款在线移动应用原型工具，旨在帮助各种规模的移动互联网团队快速构建移动应用产品原型。'},
               {                id: 47,
                img: 'gqj',
                name: '张勇',
                title: '智能健康牙刷',
                par: '智能健康牙刷项目，在刷牙的同时采集生理指标，在疾病产生早期甚至未产生时进行诊断并协助人们进行预防。'},
                {                id: 48,
                img: 'gqj',
                name: '封华平',
                title: '北京噜噜科技有限公司',
                par: 'LULU立志缔造有情有趣品牌！将重新定义情趣品类生态，所有产品都“有趣、好玩，做爱机器人LULU1会因人而异叫床！ '},
                {                id: 49,
                img: 'gqj',
                name: '张默',
                title: '图片搜索引擎衣+',
                par: '衣+是以图搜衣的图像识别搜索引擎，提供App和API，收录了海内外数十家主流时尚电商，是连接图片和电商的平台。 '},
                {                id: 50,
                img: 'gqj',
                name: '逸创云客服',
                title: '北京噜噜科技有限公司',
                par: '逸创云客服旨在帮助企业，创业者摆脱客户服务，专注核心业务发展。我们解决客户服务的一切疑难杂症。 '},
                {                id: 52,
                img: 'gqj',
                name: '柳峰',
                title: 'TrustCloud可信云网关',
                par: 'TrustCloud可信云网关，让用户在公有云中享有同私有云一样的数据安全保护和完全控制，实现可“一键、实时、无缝”调度的智能云网服务。 '}
        ];

        function html_pdg(info){
             return   '<div class="player"><span class="player-name">'+ info.name +'</span><div class="player-title"><span>'+
                info.title + '</span></div><p class="player-p">'+ info.par +'</p></div>';
        }

        var lists = Math.floor(players.length/4);
        if(players.length - lists * 4 >0)lists+=1;
        console.log(lists);
        $('.player-body').css('width', screen_width * lists);
        for(var i=0;i<lists;i++){
            var template = '<div class="player-list" id="player'+ i +'">';
            for(var j=i*4 ;j<i*4 + 4;j++){
                if(j>=players.length)break;
                template+=html_pdg(players[j]);
            }
            template+='</div>';
            $('.player-body').append(template)
            if(i==0){
                $('.player-foot .point-pages').append('<div class="page-point active" id="page-'+ i +'"></div>')
            }else{
                $('.player-foot .point-pages').append('<div class="page-point" id="page-'+ i +'"></div>')
            }
            $('.point-pages').css('width', 22 * lists);
        }
        $('.player-list').css('width', screen_width);

        var current_page = 0;
        var current_offset = 0;

        function turn_page(current){
            $('.phone-main5 .active').removeClass('active');
            $('#page-' + current).addClass('active');
        }

        var left_scroll = function(){
            if(current_page<lists-1){
                current_page++;
                current_offset-=screen_width;
                zepto(".player-body").animate({
                    left: current_offset +'px'
                }, 200, 'ease-out');
                turn_page(current_page)
            }
        };

        var right_scroll = function(){
            if(current_page>0){
                current_page--;
                current_offset+=screen_width;
                zepto(".player-body").animate({
                    left: current_offset + 'px'
                }, 200, 'ease-out');
                turn_page(current_page)
            }
        };

        zepto(".phone-main5").on("swipeLeft", left_scroll);
        zepto(".phone-main5").on("swipeRight", right_scroll);
    };
    return {
        phone_init: phone_init
    }
})