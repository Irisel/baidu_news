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
//        var rule_position = undefined;
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
//	    $("#rules").click(function(){
//            var _this = this;
//            excahnge_zones(_this);
//		    $.scrollTo(rule_position - 40, 500);
//	    });
        $("#champion").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('#player_champion').offset().top;
		    $.scrollTo(video_position - 171, 500);
	    });

        $("#second").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('#player_second').offset().top;
		    $.scrollTo(video_position - 71, 500);
	    });
        $("#third").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('#player_third').offset().top;
		    $.scrollTo(video_position - 71, 500);
	    });
        $("#luyan").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main8').offset().top;
		    $.scrollTo(video_position - 40, 500);
	    });

        $("#final").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main7').offset().top;
		    $.scrollTo(video_position - 80, 500);
	    });
        $("#videos").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var video_position = $('.main6').offset().top;
		    $.scrollTo(video_position - 40, 500);
	    });
	    $("#players").click(function(){
            var _this = this;
            excahnge_zones(_this);
            var player_position = $('.main5').offset().top;
            $.scrollTo(player_position - 40, 500);
	    });
	    $("#partners").click(function(){
            var _this = this;
            excahnge_zones(_this);
            $.scrollTo($('#main4').offset().top - 50, 500);
	    });
	    $("#location").click(function(){
            var _this = this;
            excahnge_zones(_this);
            $.scrollTo($('#ml').offset().top - 50, 500);
	    });
        function html_pdg(info){
            var luyan = info.luyan?('<div class="luyan-div"><a class="luyan" target="_blank" href="' + info.luyan +'"></a></div>'):'';
            var img = info.img?('<div class="player-head"><img class="player" src="images/players/' + info.img + '"></div>'):'';
            return img + '<span class="player-name">'+ info.name +'</span><div class="player-title"><span>'+
                info.title + '</span></div>' + luyan + '<p class="player-p">'+ info.par +'</p>';
        }
        function html_pdg2(info){
            var luyan = info.luyan?('<div class="luyan-div"><a class="luyan" target="_blank" href="' + info.luyan +'"></a></div>'):'';
            var img = info.img?('<div class="player-head"><img class="player" src="images/players/' + info.img + '"></div>'):'';
            var title = info.mark_title ?('<div class="mark_title">'+ info.mark_title +'</div>'): '';
            return title + img + '<div class="player-title"><span class="name">'+
                info.name + '</span><span class="title">'+ info.title + '</span></div>' + luyan + '<p class="player-p">'+ info.par +'</p>';
        }
        var players = {};
        players.players16 = [
             {                id: 40,
                img: 'second.png',
                name: '李浅',
                title: 'Bionic cough simulator',
                mark_title: '亚军',
//                mark: 'player_second.png',
                par: '一种创新的、重症呼吸治疗设备，用于插管呼吸机病人，国际领先技术，多家三甲医院主任认可。'},
             {                id: 5,
                img: 'champion.png',
                name: '陈拯民',
                title: '星谷实验室',
//                mark: 'player_first.png',
//                size: 2,
                par: '星谷实验室开发的电机，其功率密度是国际市场上最高，相同重量下星谷的电机是Tesla汽车电机功率的2.5至3倍'},
             {                id: 30,
                img: 'third.png',
                name: '李俊',
                title: '成都福际生物技术',
                mark_title: '季军',
//                mark: 'player_third.png',
                par: '福际团队基于自主研发的Direct PCR 技术，革命性的将传统两步法PCR改为一步法，开发出填补市场空白的直接PCR/qPCR系列试剂盒。'}
        ];
        players.players0 = [
              {                id: 1,
                name: '李晓光',
                title: '生活里',
                luyan: 'http://www.iqiyi.com/v_19rrnq5sig.html?list=19rro8l2gi',
                par: '生活里致力于本地生活服务的深度整合与智能推荐，让每个人都享受到更美好的生活。'},
            {                id: 2,
                name: '苗刚',
                title: '鸭梨心理',
                luyan: 'http://www.iqiyi.com/v_19rrnq5s24.html?list=19rro8l2gi',
                par: '心理疾病和心理健康管理APP，建立O+O的心理疾病和心理健康管理平台。'},

            {                id: 4,
                name: '李厚辰',
                title: '享借',
                luyan: 'http://www.iqiyi.com/v_19rrnq5rfw.html?list=19rro8l2gi',
                par: '享借是人与人之间自由借用好东西的社区，你可以上传或借到别人的物品。在押金与信用机制的保证下，借用是安全的。享借是免费借用的，与物品的使用场景（技能或兴趣）高度关联。用户将借用看做一种社区或社群的方式。'},

           {                id: 7,
                name: '王猛',
                title: 'FIR.im',
                luyan: 'http://www.iqiyi.com/v_19rrnq5m54.html?list=19rro8l2gi',
                par: 'FIR.im 为开发者提供极速应用测试发布、实时崩溃分析、邀请码一键生成管理等一系列开发测试效率工具服务。'},
            {                id: 9,
                name: '陈坤极',
                title: '超级表格',
                luyan: 'http://www.iqiyi.com/v_19rrnq5tkc.html?list=19rro8l2gi',
                par: '做一款基于互联网的创新表格，让全球10亿Excel用户多了一个选择。超级表格是一个轻量、可协作的“在线Excel”，协作性远胜Excel。同时也是在线表单，用于数据的收集、处理和共享。'},
            {                id: 13,
                name: '马世雄',
                title: '巴别鸟',
                luyan: 'http://www.iqiyi.com/v_19rrnq5uik.html?list=19rro8l2gi',
                par: '巴别鸟是一款可以快速对图片及PDF进行协同批注及讨论的工具，在移动端支持语音批注。 围绕图稿完成工作。'},

            {                id: 19,
                name: '赵锦鹏',
                title: '水果无忧',
                luyan: 'http://www.iqiyi.com/v_19rrnq5vo4.html?list=19rro8l2gi',
                par: '水果无忧是专注于为线下B端实体店解决水果采购难，打通供应链，及实现互联网化服务的移动应用。'},
           {                id: 21,
                name: '刘阳',
                title: '印paper',
                luyan: 'http://www.iqiyi.com/v_19rrnq5vho.html',
                par: '低成本可重复印刷电子纸采用电子墨水技术，使用印刷的方式取代电路驱动的方式（如Kindle），因此具有超低成本、可重复印刷、使用过程中不用电等优势。'},
            {                id: 24,
                name: '刘永青',
                title: '汇采通',
                luyan: 'http://www.iqiyi.com/v_19rrnq5v9c.html?list=19rro8l2gi',
                par: '降低企业采购成本的利器、面向中小企业的电子采购云服务系统，实现网上询比价、网上竞价、招投标等多种比选供应商的采购方式。'},
            {                id: 26,
                name: '张悦',
                title: '请出价',
                luyan: 'http://www.iqiyi.com/v_19rrnq5wa8.html?list=19rro8l2gi',
                par: '用买家出价来革卖家主导的老商业秩序的命，革新60亿人的交易陋习，汇集C端出价需求，用B端柔性供应链的方式来满足,未来没有需求就没有买卖。'},
            {                id: 27,
                name: '翟强',
                title: 'Grush',
                luyan: 'http://www.iqiyi.com/v_19rrnq5w0g.html?list=19rro8l2gi',
                par: 'GRUSH智能牙刷，是一个智能硬件与移动互联网范畴的创业项目。通过将内含传感器芯片的牙刷与智能手机相连，让刷牙变得更加有趣、精准。商业模式从硬件销售、APP STORE到O2O，逐步升级，商业前景十分广阔。'},
            {                id: 28,
                name: '许超前',
                title: '比特兄弟',
                luyan: 'http://www.iqiyi.com/v_19rrnq5m08.html?list=19rro8l2gi',
                par: '分布式办公场景下的沟通和协作平台。'},
             {                id: 29,
                name: '刘征',
                title: 'BearyChat',
                luyan: 'http://www.iqiyi.com/v_19rrnq5mck.html?list=19rro8l2gi',
                par: '「BearyChat」是一款面向团队的沟通工具，通过工作信息的快速汇集和精准推送，帮助团队升华信息价值，提升工作效率。   '},
             {                id: 30,
                name: '李俊',
                title: '成都福际生物技术',
                luyan: 'http://www.iqiyi.com/v_19rrnq5m6o.html?list=19rro8l2gi',
                par: '福际团队基于自主研发的Direct PCR 技术，革命性的将传统两步法PCR改为一步法，开发出填补市场空白的直接PCR/qPCR系列试剂盒。'},

               {                id: 47,
                name: '张勇',
                title: '智能健康牙刷',
                luyan: 'http://www.iqiyi.com/v_19rrnq5xls.html?list=19rro8l2gi',
                par: '智能健康牙刷项目，在刷牙的同时采集生理指标，在疾病产生早期甚至未产生时进行诊断并协助人们进行预防。'},
                {                id: 48,
                name: '封华平',
                title: '噜噜科技',
                luyan: 'http://www.iqiyi.com/v_19rrnq2jmg.html?list=19rro8l2gi',
                par: 'LULU立志缔造有情有趣品牌！将重新定义情趣品类生态，所有产品都“有趣、好玩，做爱机器人LULU1会因人而异叫床！ '},

              {                id: 35,
                name: '刘涛',
                title: '住宅公园',
                 luyan: 'http://www.iqiyi.com/v_19rrnq5x54.html?list=19rro8l2gi',
                par: '住宅公园是国内首家专注于宅基地、旅游观光、休闲度假、新农村建设用房的综合服务平台，主要业务是新型房屋推广与建设全产业链服务，通过标准化设计、工厂化生产、装配式施工的自建房全流程梳理，对原有的渠道化销售模式进行平台化改造，降低新型房屋的价格，使广大农村自建房愿意用新型房屋，用的起新型房屋。'},
              {                id: 49,
                name: '张默',
                title: '图片搜索引擎衣+',
                luyan:'http://www.iqiyi.com/v_19rrnpvwgw.html?list=19rro8l2gi',
                par: '衣+是以图搜衣的图像识别搜索引擎，提供App和API，收录了海内外数十家主流时尚电商，是连接图片和电商的平台。 '},
                {                id: 50,
                name: '李成',
                title: '逸创云客服',
                luyan: 'http://www.iqiyi.com/v_19rrnq2hfw.html?list=19rro8l2gi',
                par: '逸创云客服旨在帮助企业，创业者摆脱客户服务，专注核心业务发展。我们解决客户服务的一切疑难杂症。 '},
               {                id: 52,
                name: '柳峰',
                title: 'TrustCloud可信云网关',
                luyan: 'http://www.iqiyi.com/v_19rrnq2jw0.html?list=19rro8l2gi',
                par: 'TrustCloud可信云网关，让用户在公有云中享有同私有云一样的数据安全保护和完全控制，实现可“一键、实时、无缝”调度的智能云网服务。 '},
               {                id: 44,
                name: '赫梓含',
                title: '墨刀',
                luyan: 'http://www.iqiyi.com/v_19rrnq5wdc.html?list=19rro8l2gi',
                par: '墨刀是一款在线移动应用原型工具，旨在帮助各种规模的移动互联网团队快速构建移动应用产品原型。'},

               {                id: 33,
                name: '沈力',
                title: '光辉城市',
                luyan: 'http://www.iqiyi.com/v_19rrnpvwc8.html?list=19rro8l2gi',
                par: '光辉城市，专注于建筑设计行业产品革新的互联网公司，将VR（虚拟现实）和AR（增强现实）技术在建筑设计领域产品化和免费化，给设计师提供全新的、可互动的方案汇报体验'},
             {                id: 34,
                name: '蔡亮',
                title: 'Autobot',
                luyan: 'http://www.iqiyi.com/v_19rrnq5xec.html?list=19rro8l2gi',
                par: '车车智能（AutoBot）是一家提供汽车移动互联网解决方案的科技公司。通过系列车载智能硬件产品和简便的 App 保护和管理你的汽车。利用互联网服务+硬件的丰富产品线，为个人用户提供驾驶场景下的移动互联网服务，让每辆车都能成为智能汽车。'},

             {                id: 36,
                name: '万勇',
                title: 'e伴',
                luyan: 'http://www.iqiyi.com/v_19rrnpvujk.html?list=19rro8l2gi',
                par: 'e伴是第一个老人行为识别及亲情关爱服务系统，以智能硬件和手机软件为工具，替儿女照看老人生活行为状态。'},
             {                id: 37,
                name: '魏清晨',
                title: '海妖情绪识别引擎',
                luyan: 'http://www.iqiyi.com/v_19rrnq2gyk.html?list=19rro8l2gi',
                par: 'EmoKit ，全球最好的情绪识别免费API；EQ4AI，让僵尸机器，变成大白。语音、心率、计步、呼吸、笔迹等体征识别情绪，匹配音乐等内容。'},
//             {                id: 38,
//                img: 'gqj',
//                name: '黄仁志',
//                title: '辰宜大脑计划',
//                par: '辰宜超级大脑计划是基于思维科学理论、关系数学、演绎数学、时间数学与立体计算及数据链技术的超级人工智能演进计划。'},
             {                id: 39,
                name: '周轩羽',
                title: '探探',
                luyan: 'http://www.iqiyi.com/v_19rrnq5wwg.html?list=19rro8l2gi',
                par: '探探，颠覆上一代基于LBS的社交模式，上线6个月时即突破百万用户，同时在6个月内完成了天使轮、A轮融资，成为2014年成长最快的社交应用。探探以更完美的“两情相悦”的社交模式，以及新颖的“向左向右滑”操作体验，成为陌生人社交领域的强劲黑马，在85后、90后的年轻用户群中迅速占领乐市场。'},
//             {                id: 40,
//                img: 'gqj',
//                name: '李浅',
//                title: 'Bionic cough simulator',
//                par: '一种创新的、重症呼吸治疗设备，用于插管呼吸机病人，国际领先技术，多家三甲医院主任认可。'},
             {
               name: '赵跃',
               title: '英语作文智能批改网',
               luyan: 'http://www.iqiyi.com/v_19rrnq2hpg.html?list=19rro8l2gi',
               par: '批改网利用大数据自动批改英语作文，让老师更轻松，让学生像玩游戏一样学英语，在娱乐中学习和提分。'
             },
             {                id: 42,
                name: '陈震',
                title: '速感科技（Ulbrain机器人操作系统）',
                luyan: 'http://www.iqiyi.com/v_19rrnq5x20.html?list=19rro8l2gi',
                par: '我们研发第一代深度定制的通用机器人操作系统，让智能设备拥有感知能力，我们将进行一场机器人革命！'},
             {                id: 43,
                name: '胡宇翔',
                title: '奥秘城市o2o游戏',
                luyan: 'http://www.iqiyi.com/v_19rrnq5wn8.html?list=19rro8l2gi',
                par: '奥秘城市是一款在现实中打怪升级的游戏。APP端发布任务，导航任务，角色养成与组队社交，在城市各个商户完成不同类型的游戏任务。。'},
             {
                name: '夏旭',
                title: 'i-Vision全球配方眼镜移动电商解决方案',
                luyan: 'http://www.iqiyi.com/v_19rrnq5wik.html?list=19rro8l2gi',
                par: '通过移动互联网及IT技术为欠发达国家及边远地区的10亿以上人口提供全球价格最低廉的在线配制眼镜服务。'
             }


        ];

       players.players1 = [
             {
                name: '张书宾',
                title: '灵镜VR',
                luyan: 'http://www.iqiyi.com/v_19rrnq5mi4.html?list=19rro8l2gi',
//                size: 2,
                par: '灵镜VR是一家从事虚拟现实眼镜研发的创业团队，两款产品灵镜小白和灵镜小黑。灵镜小白目前正在淘宝众筹，上线6天突破百万金额；灵镜小黑是VR行业最早基于移动平台研发的VR一体机，在技术和经验方面有着不错的积累，小黑将于今年下半年面世。'
             },
                {                id: 3,
                name: '马庆伟',
                title: '临床质谱开启精准医学新时代',
                luyan: 'http://www.iqiyi.com/v_19rrnq5rts.html?list=19rro8l2gi',
//                size: 2,
                par: '新生儿听力基因检测：MaldiTOF是2002年诺贝尔化学奖的得奖技术，在2013年得到美国FDA批准可以用于微生物的快速鉴定，2014年被FDA批准用于基因诊断，目前临床质谱技术在无创产前RHD血型检测，新生儿耳聋基因检测。我国每年2000万新生儿中，严重听力障碍发生率为1‰-3‰。每年新增3万聋儿，而每年发现耳聋易感基因携带者则达100万。'},
               {                id: 5,
                name: '陈拯民',
                title: '星谷实验室',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnq5ttw.html?list=19rro8l2gi',
                par: '星谷实验室开发的电机，其功率密度是国际市场上最高，相同重量下星谷的电机是Tesla汽车电机功率的2.5至3倍'},
              {                id: 16,
                name: '伏英娜',
                title: 'appMagics哈图',
                luyan: 'http://www.iqiyi.com/v_19rrnq5vvk.html?list=19rro8l2gi',
//                size: 2,
                par: '超现实体验社交，让手机上的社交体验更贴近现实和娱乐化，更具参与和沉浸感，让每个人都能成为生活的魔法师，共创精彩世界。appMagics是一家硅谷范儿、胸怀梦想的创业公司，我们在把世界领先的虚拟现实+增强现实，面部识别和2D/3D图形图像算法等领域的高新技术运用于面向移动互联网消费者市场的产品之中，进行融合应用和游戏，工具及社交的全新探索和尝试。'},
             {
                name: '黄栋',
                title: 'SmartEarth',
                luyan: 'http://www.iqiyi.com/v_19rrnq2j9s.html?list=19rro8l2gi',
                par: 'SmartEarth-覆盖三维数据全产业链的一站式地理信息服务平台， 提供从倾斜摄影数据采集，全自动建模处理到地理信息大数据应用的云服务。整合了无人机等技术，为智慧城市，虚拟现实和自动驾驶等行业提供解决方案。'
             },
             {
                name: '黃俊傑',
                title: 'Viscovery',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnpzxgk.html?list=19rro8l2gi',
                par: '欧米创意引晴(Viscovery.co)以影像辨识为基础，提供全球专利之离线辨识、视频识别等加值服务；2013年成立于新加坡，结合台湾、新加坡等地人才，于2014分别在上海、北京设立办公室，将世界顶尖技术结合产业资源实践线下连接线上的O2O移动端服务。积极布局东南亚、日韩等市场，并成为亚洲首位投入开发并成功发表穿戴式装置Google glass之应用的影像识别厂商。'
             },
             {
                name: '季小武',
                title: '快约',
                luyan: 'http://www.iqiyi.com/v_19rrnpvw9g.html?list=19rro8l2gi',
                par: '快约是一个售卖碎片时间的平台，把你的闲暇时间和能力拿来出售，让需要的人快速约到你，并为你的时间买单。相当于每个人开一个手机淘宝店，出售自己的碎片时间。'
             },
             {
                name: '李时念',
                title: 'KenRobot',
                luyan: 'http://www.iqiyi.com/v_19rrnq2ffs.html?list=19rro8l2gi',
                par: '最简单最方便的智能硬件开发平台，迅速将你的IDEA转化为实际项目。在这里你可以通过简单的拖拽实现复杂的硬件连接及软件编程，更有强大的仿真平台及在线商城为用户提供贴心服务。'
             },
             {
                name: '刘俊彦',
                title: '环信',
                luyan: 'http://www.iqiyi.com/v_19rrnpzy74.html?list=19rro8l2gi',
                par: '环信移动客服，是基于即时通讯云技术的创新，让App拥有会话形式客服功能，且拥有知识库、智能自动回复、轨迹分析、客户画像等功能，提高App客服效率和订单转化量。'
             },
             {
                name: '田荣',
                title: '群星',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnpvwvo.html?list=19rro8l2gi',
                par: '通过大数据能力使企业信息更透明，融资风险更可知；通过自动化的运营平台降低融资过程中的操作成本；通过互联网的方式降低获客成本，提高获客效率；帮助汇聚在供应链中海量分散的6000万家中小企业，能够平等的获得融资机会。'
             },
             {
                name: '王宝臣',
                title: '创客贴',
                luyan: 'http://www.iqiyi.com/v_19rrnq2fuk.html?list=19rro8l2gi',
                par: '创客贴在线设计平台是一款功能强大、简单易用的在线图形设计工具，用户使用平台提供的大量的图片、模板等设计元素，通过简单的拖拉拽操作就可以轻松设计出精美的海报、邀请函、ppt、信息图、名片等多种日常场景的图片与设计'
             },
             {
                name: '王洪亮',
                title: '行云眼镜',
                luyan: 'http://www.iqiyi.com/v_19rrnpzxbw.html?list=19rro8l2gi',
                par: '世界最轻的3D大屏智能眼镜，全重70克，地铁上就可以看3D大片；游戏级体感操控，轻松玩转CS。'
             },
             {
                name: '王朋',
                title: 'X－Quake机器人套件',
                luyan: 'http://www.iqiyi.com/v_19rrnq2i24.html?list=19rro8l2gi',
                par: '这是一个机器人拼装套件，让每一个人都可以像拼积木一样的拼接出自己的机器人，无需编程'
             },
             {
                name: '王瑞祥',
                title: 'AirSig',
                luyan: 'http://www.iqiyi.com/v_19rrnpzy58.html?list=19rro8l2gi',
                par: '来自台湾的AirSig空中签名技术是基于识别手势认证身份，通过检测手势移动和旋转的轨迹、速度和力量等，精准认证发起人的身份'
             },
             {
                name: '王有朝',
                title: '运策网',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnpvwp8.html?list=19rro8l2gi',
                par: '运策网聚焦于城际货运，通过整合个体货车，为生产制造类企业提供整车运输服务，并为货损货差、运输延迟负责。承诺2小时货车上门取货，运价低于市场运价10%。目前在华东地区服务了500家货主企业，日成交150车，日成交额40万元。'
             },
             {
                name: '吴冰',
                title: '石墨',
                luyan: 'http://www.iqiyi.com/v_19rrnq2ie4.html?list=19rro8l2gi',
                par: '目前，石墨是一款在线文档工具，方便多人实时同时编写和讨论。未来，石墨试图改变人们使用办公文档的工作方式。'
             },
             {
                name: '闫文闻',
                title: '音乐笔记',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnpznd0.html?list=19rro8l2gi',
                par: '音乐笔记，可以把孩子钢琴的学习效率提升65%以上的全球首款智能乐器辅助训练系统。将传统方式无法获知的节奏、指法、紧张程度、节奏等演奏细节数据化、可视化、互动化，帮助中国千万琴童和全球音乐爱好者更高效的学习和享受音乐。也为乐器行业提供一套迅速O2O化的工具，通过数据的流动，让整个乐器培训生态系统（Eco-system）的参与者（乐器制造商，培训提供商，老师，学生等）受益。'
             },
             {
                name: '严伯钧',
                title: '为艺音乐教育',
                luyan: 'http://www.iqiyi.com/v_19rrnq2jtw.html?list=19rro8l2gi',
                par: '为艺是专注于音乐教育的O2O平台，致力于线下一对一音乐教学的去中介化，并为用户提供全方位的音乐教育服务。'
             },
//             {
//                img: 'qgj',
//                name: '易朝刚',
//                title: '辰宜大脑计划',
//                par: '辰宜超级大脑计划是基于思维科学理论、关系数学、演绎数学、时间数学与立体计算及数据链技术的超级人工智能演进计划。'
//             },
             {
                name: '胡振宇',
                title: '翎客航天',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnq5lss.html?list=19rro8l2gi',
                par: '翎客航天是国内首家从事航天系统产品研发制造的民营公司。通过深度整合航天器设计、仿真、制造、试验全产业流程，从而显著提高研发效率，推动促进国内航天产业商业化，民用化发展；目标在十年内让每个人都拥有遨游太空的权力。'
             }
        ];

        players.players2 = [
            {
               img: 'zhangyue.png',
               name: '张跃',
               title: '英语作文智能批改网',
               luyan: 'http://www.iqiyi.com/v_19rrnq2hpg.html?list=19rro8l2gi',
               par: '批改网利用大数据自动批改英语作文，让老师更轻松，让学生像玩游戏一样学英语，在娱乐中学习和提分。'
             },
             {                id: 49,
                img: 'zhangmo.png',
                name: '张默',
                title: '图片搜索引擎衣+',
                luyan:'http://www.iqiyi.com/v_19rrnpvwgw.html?list=19rro8l2gi',
                par: '衣+是以图搜衣的图像识别搜索引擎，提供App和API，收录了海内外数十家主流时尚电商，是连接图片和电商的平台。 '},
             {                id: 37,
                img: 'weiqingchen.png',
                name: '魏清晨',
                title: '海妖情绪识别引擎',
                luyan: 'http://www.iqiyi.com/v_19rrnq2gyk.html?list=19rro8l2gi',
                par: 'EmoKit ，全球最好的情绪识别免费API；EQ4AI，让僵尸机器，变成大白。语音、心率、计步、呼吸、笔迹等体征识别情绪，匹配音乐等内容。'},
             {                id: 34,
                img: 'cailiang.png',
                name: '蔡亮',
                title: 'Autobot',
                luyan: 'http://www.iqiyi.com/v_19rrnq5xec.html?list=19rro8l2gi',
                par: '车车智能（AutoBot）是一家提供汽车移动互联网解决方案的科技公司。通过系列车载智能硬件产品和简便的 App 保护和管理你的汽车。利用互联网服务+硬件的丰富产品线，为个人用户提供驾驶场景下的移动互联网服务，让每辆车都能成为智能汽车。'},
             {
                img: 'huzhenyu.png',
                name: '胡振宇',
                title: '翎客航天',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnq5lss.html?list=19rro8l2gi',
                par: '翎客航天是国内首家从事航天系统产品研发制造的民营公司。通过深度整合航天器设计、仿真、制造、试验全产业流程，从而显著提高研发效率，推动促进国内航天产业商业化，民用化发展；目标在十年内让每个人都拥有遨游太空的权力。'
             },
             {                id: 24,
                img: 'liuyongqing.png',
                name: '刘永青',
                title: '汇采通',
                luyan: 'http://www.iqiyi.com/v_19rrnq5v9c.html?list=19rro8l2gi',
                par: '降低企业采购成本的利器、面向中小企业的电子采购云服务系统，实现网上询比价、网上竞价、招投标等多种比选供应商的采购方式。'},
             {                id: 35,
                img: 'liutao.png',
                name: '刘涛',
                title: '住宅公园',
                 luyan: 'http://www.iqiyi.com/v_19rrnq5x54.html?list=19rro8l2gi',
                par: '住宅公园是国内首家专注于宅基地、旅游观光、休闲度假、新农村建设用房的综合服务平台，主要业务是新型房屋推广与建设全产业链服务，通过标准化设计、工厂化生产、装配式施工的自建房全流程梳理，对原有的渠道化销售模式进行平台化改造，降低新型房屋的价格，使广大农村自建房愿意用新型房屋，用的起新型房屋。'},
            {                id: 30,
                img: 'lijun.png',
                name: '李俊',
                title: '成都福际生物技术',
                luyan: 'http://www.iqiyi.com/v_19rrnq5m6o.html?list=19rro8l2gi',
                par: '福际团队基于自主研发的Direct PCR 技术，革命性的将传统两步法PCR改为一步法，开发出填补市场空白的直接PCR/qPCR系列试剂盒。'},
            {                id: 5,
                img: 'chenzhengmin.png',
                name: '陈拯民',
                title: '星谷实验室',
//                size: 2,
                luyan: 'http://www.iqiyi.com/v_19rrnq5ttw.html?list=19rro8l2gi',
                par: '星谷实验室开发的电机，其功率密度是国际市场上最高，相同重量下星谷的电机是Tesla汽车电机功率的2.5至3倍'},
             {                id: 40,
                img: 'liqian.png',
                name: '李浅',
                title: 'Bionic cough simulator',
                par: '一种创新的、重症呼吸治疗设备，用于插管呼吸机病人，国际领先技术，多家三甲医院主任认可。'}
        ];

        function cmp(a, b){
            return a.par.length - b.par.length;
        }
        players.players0.sort(cmp);
        players.players1.sort(cmp);
        function inlit_players(element, players, template){
              var list = $(element).find('td');
              for(var i=0;i<players.length;i++){
                  var style=players[i].size?( 219 * players[i].size + 'px' ):undefined;
                  $(list[i]).html(template(players[i]));
                  if(style)$(list[i]).css('width', style);
              }
        };

        $('.js-player-trigger').click(function(){
            var _this = $(this);
            if(_this.hasClass('active'))return;
            var no = _this.data('no');
            if(no=='players0'){
                $('#player0').show();
                $('.main5').css('height',$('#player0').height() + 240);
                $('#player1').hide();
            }else{
                $('#player1').show();
                $('.main5').css('height',$('#player1').height() + 240);
                $('#player0').hide();
            }
            $('.m5-trigger .active').removeClass('active');
            _this.addClass('active');
        });

        inlit_players('#player16', players.players16, html_pdg2);
        inlit_players('#player0', players.players0, html_pdg);
        inlit_players('#player1', players.players1, html_pdg);
        inlit_players('#player2', players.players2, html_pdg);


        $('.main5').css('height',$('#player0').height() + 240);
        $('.main7').css('height',$('#player2').height() + 80);
        $('#player1').hide();
        $('#slides').html('<img src="images/luyan/0001.JPG"><img src="images/luyan/0002.JPG"><img src="images/luyan/0003.JPG"><img src="images/luyan/0004.JPG"><img src="images/luyan/0005.JPG"><img src="images/luyan/0006.JPG"><img src="images/luyan/0007.JPG"><img src="images/luyan/0008.JPG"><img src="images/luyan/0009.JPG"><img src="images/luyan/0010.JPG"><img src="images/luyan/0011.JPG"><img src="images/luyan/0012.JPG"><img src="images/luyan/0013.JPG"><img src="images/luyan/0014.JPG"><img src="images/luyan/0015.JPG"><img src="images/luyan/0016.JPG"><img src="images/luyan/0017.JPG"><img src="images/luyan/0018.JPG"><img src="images/luyan/0019.JPG"><img src="images/luyan/0020.jpg"><img src="images/luyan/IMG_3205.jpg"><img src="images/luyan/IMG_3206.jpg"><img src="images/luyan/IMG_3253.jpg"><img src="images/luyan/IMG_3284.jpg"><img src="images/luyan/IMG_3315.jpg"><img src="images/luyan/IMG_3327.jpg"><img src="images/luyan/IMG_3349.jpg"><img src="images/luyan/IMG_3363.jpg"><img src="images/luyan/IMG_3418.jpg"><img src="images/luyan/IMG_3443.jpg"><img src="images/luyan/IMG_3451.jpg"><img src="images/luyan/IMG_3510.jpg"><img src="images/luyan/IMG_3532.jpg"><img src="images/luyan/IMG_3563.jpg"><img src="images/luyan/IMG_3568.jpg"><img src="images/luyan/IMG_3583.jpg"><img src="images/luyan/IMG_3676.jpg"><img src="images/luyan/IMG_3702.jpg"><img src="images/luyan/IMG_3775.jpg"><img src="images/luyan/IMG_3787.jpg"><img src="images/luyan/IMG_3814.jpg"><img src="images/luyan/IMG_3899.jpg"><img src="images/luyan/IMG_3925.jpg">')
        $('#slides').slidesjs({
             width: 1080,
            height: 528,
            play: {
                active: true,
                auto: true,
                interval: 4000,
                swap: true
            }
        });

//        rule_position = $('#main3').offset().top;
//        $('.m3-bg4').css('top', rule_position);
//        $('.m3-bg5').css('top', rule_position + 1107);
        $('.embed-body').html('<embed src="http://player.video.qiyi.com/6f0b7c2f4ff688697311ec5638e76bff/0/0/v_19rroj2a30.swf-albumId=371000800-tvId=371000800-isPurchase=0-cnId=30" allowFullScreen="true" quality="high" width="837" height="610" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>');
        $('.embed-panel .btn').click(function(){
            if($(this).hasClass('active'))return false;
            $('.embed-panel .active').removeClass('active');
            $(this).addClass('active');
            var embed = '<embed src="' + $(this).data('src') + '" allowFullScreen="true" quality="high" width="837" height="610" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
            $('.embed-body').html(embed);
        })
    };
    return {
        pc_init: pc_init
    }
});
