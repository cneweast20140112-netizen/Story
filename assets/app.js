const bookSeeds = [
  {
    id: "star",
    title: "星河旧梦",
    author: "江晚",
    category: "科幻",
    targetWords: "约22万字",
    readers: "适合25-45岁，喜欢硬科幻、家族秘密与文明悬念的读者",
    heat: "128.6万热度",
    color: "linear-gradient(160deg, #233047, #5f83b3)",
    mark: "星",
    hook: "父亲失踪十年后，一枚旧信标把维修师林澈引向被抹除的地球坐标。",
    desc: "失落舰队、殖民地政治、AI遗产与亲情谜案交织，逐步展开人类离开地球后的三百年隐史。",
    profile: ["林澈", "秦弦", "星港、黑域与沉默舰队之间", "联盟封锁、父亲旧案和地球真相同时压过来", "冷白引航灯、金属舱壁、失真的广播和远处沉默的群星", "真相是否值得用一场可能到来的战争交换", "他和父亲的关系像一枚没有完全解开的锁，每打开一层都会露出新的伤口", "他知道自己不能只做维修师了，那个被藏起来的时代正在逼他站到人群前面"],
    chapters: [
      ["第一章 漂流信标", "十七码头的引航灯还亮着，林澈在报废拖船里听见不属于本地频道的女声。", "信标提到不要相信归航地图，而同型号设备正是父亲十年前失踪前最后维修过的东西。", "林澈删除维修记录，把信标藏进工具箱。"],
      ["第二章 父亲的锁", "信标被私人密钥锁住，提示语是父亲常写的回家之前。", "旧相册里出现蓝色海岸，和联盟教材里的地球毁灭说法互相矛盾。", "星港安保署登门搜查，只问他是否听见了那个声音。"],
      ["第三章 黑域坐标", "破解后的星图指向公开数据库里不存在的黑域。", "走私领航员秦弦提出高价带路，并要求获得信标副本。", "飞船离港时，广播里响起父亲留下的警告。"],
      ["第四章 沉默舰队", "黑域深处漂着一支三百年前的远航舰队。", "旗舰中仍有数千个休眠舱，名字来自现今殖民地执政家族。", "秦弦意识到这不是遗迹，而是推翻联盟合法性的证据。"],
      ["第五章 地球来信", "旗舰AI灯塔保存着地球最后一次全球广播。", "广播显示地球不是毁灭，而是主动封锁。", "林澈面临公开真相或守住谎言的选择。"],
      ["第六章 第一场审判", "林澈返回星港后成为通缉犯。", "秦弦向全城开放广播频道，让第一段地球影像出现在夜空。", "整座殖民城安静得像一枚等待爆炸的种子。"],
      ["第七章 议长的邀请", "议长赫温没有开火，而是邀请林澈进入议事厅。", "圆桌尽头播放着父亲年轻时的影像记录。", "赫温说林澈的父亲是最后一个投反对票的人。"],
      ["第八章 休眠名单", "灯塔发来完整休眠名单，名单中有许多被登记死亡的科学家。", "秦弦在名单末尾找到自己的母亲。", "两人明白沉默舰队是一枚备用火种。"],
      ["第九章 伪造的和平", "赫温承认联盟修改历史，却坚持谎言维持了和平。", "林澈在贫民环区看见真相带来的争吵和希望。", "他发现真相既切开伤口，也逼人看见伤口下面的心。"],
      ["第十章 父亲的回声", "第二层密钥打开后，父亲的全息影像出现在维修间。", "父亲承认参与封锁，也偷走部分坐标留给未来。", "林澈第一次看见父亲也是会害怕的人。"],
      ["第十一章 黑域叛乱", "休眠舰队位置泄露，外环军阀派出武装船队。", "秦弦公开非法航线，烧掉自己的退路。", "林澈决定不再让少数人替所有人决定未来。"],
      ["第十二章 新航线", "林澈同步部分证据，同时隐藏最危险的完整坐标。", "有人骂他怯懦，有人称他英雄。", "归航不是回到过去，而是让人类知道真相后仍愿意走向明天。"]
    ]
  },
  {
    id: "sword",
    title: "长夜有剑",
    author: "顾青山",
    category: "玄幻",
    targetWords: "约28万字",
    readers: "适合20-50岁，喜欢江湖群像、家国抉择与成长燃点的读者",
    heat: "96.4万热度",
    color: "linear-gradient(160deg, #4f6f55, #b0a35b)",
    mark: "剑",
    hook: "少年沈照下山送粮，却发现真正吞掉天下的不是妖魔，而是人心里的长夜。",
    desc: "乱世江湖、庙堂倾轧、边城守望和一代人如何在失望中重建秩序。",
    profile: ["沈照", "柳扶风", "北境风雪、边城烽火与京城暗流之间", "粮案、军令、蛮部威胁和朝廷猜忌一起逼近", "雪粒、铁锈、旧军旗、火盆和城墙下冻硬的泥土", "一个人若想做有用的好人，究竟要付出多少清白", "他和柳扶风一刚一冷，一个仍信天明，一个早已见过长夜", "他握紧剑柄时，终于明白这一剑不是为了赢名声，而是为了让更多人活到明天"],
    chapters: [
      ["第一章 无月山门", "沈照背着旧剑下山，去给北境三城送粮册。", "守门老人问他怕不怕回不来，他说怕，但总要有人先走。", "山门钟声响了九下，像送行也像送葬。"],
      ["第二章 雪中红衣", "茶棚里坐着红衣女子柳扶风，她是被朝廷除名的边军校尉。", "她指出粮册上的粮早已被卖给蛮部。", "沈照第一次明白长夜有时是人吹灭的。"],
      ["第三章 破城之前", "北境第一座城空了半条街，孩子把雪团当馒头玩。", "城守烧掉粮册，因为他不敢承认粮案。", "沈照在蛮部旗帜后看见朝廷军械库的印记。"],
      ["第四章 第一剑", "城门破开，风雪倒灌进街巷。", "沈照拔剑挡住第一名蛮骑，也看见更多敌人从雪雾里冲出。", "这一剑让城头沉默的人重新拿起弓。"],
      ["第五章 朝中来客", "援军迟到三日，来的却是宣旨官。", "圣旨说沈照擅动军心，柳扶风通敌叛国。", "柳扶风问他要做听话的好人，还是有用的人。"],
      ["第六章 长夜盟", "沈照没有接旨，把旧剑插在城头。", "商人出钱，铁匠开炉，老兵披甲。", "长夜盟立起，只为让更多人活到天明。"],
      ["第七章 借粮", "长夜盟第一件事不是杀敌，而是借粮。", "沈照把孩子名册放到粮商陈万山桌上。", "天亮前，三十车粮从地窖推出。"],
      ["第八章 旧军旗", "柳扶风带沈照去找边军旧部。", "她把旧军旗插在雪地里，没有命令任何人归队。", "蛮部旗帜出现时，酒铺老板第一个拿起长枪。"],
      ["第九章 京中密信", "谢无咎从京城送来密信，列出卖粮官员和通敌商路。", "沈照若按规矩上奏，北境熬不到回信。", "他第一次承认守规矩有时只是把责任交给更远的人。"],
      ["第十章 截断商道", "长夜盟夜袭黑河渡，截下三百车军粮。", "沈照没有杀押粮官，却让他撕下官印。", "长夜盟从这一刻起再也回不到清白位置。"],
      ["第十一章 蛮王来书", "呼延烈派使者入城，提出割让三城换取百姓性命。", "沈照让使者看见街巷里刚恢复的烟火。", "他问若这些都变成战功，百姓又算被谁保全。"],
      ["第十二章 入京", "北境暂稳后，沈照决定带证据入京。", "柳扶风留守三城，把刀穗系在他的剑柄上。", "京城的雪更薄，却也更冷。"]
    ]
  },
  {
    id: "case",
    title: "雨巷档案",
    author: "苏眠",
    category: "悬疑",
    targetWords: "约16万字",
    readers: "适合25-50岁，喜欢社会派推理、旧案追凶与心理悬疑的读者",
    heat: "88.1万热度",
    color: "linear-gradient(160deg, #342d2b, #8a7c72)",
    mark: "案",
    hook: "档案管理员许清发现十七年前失踪案的缺页，全都指向她被删掉的童年。",
    desc: "旧城改造前夕，连环失踪旧案重启，每一条线索都像有人故意留下的求救信号。",
    profile: ["许清", "韩序", "雨巷、档案馆、旧福利院和即将拆除的老城区之间", "缺页卷宗、幸存者沉默、开发商利益和被篡改的记忆互相缠住", "潮湿纸张、旧胶片、雨水、蓝色指纹和灯光昏暗的档案室", "如果真相会伤害幸存者，是否还应该把它公开", "她和父亲之间隔着十七年的雨，也隔着一份迟来的保护", "她把卷宗重新合上，却知道自己已经不可能再做那个安静整理档案的人"],
    chapters: [
      ["第一章 少掉的一页", "许清翻开十七年前卷宗，发现七份档案都少了同一页。", "缺页处留下淡蓝色指纹，系统却显示档案已被她本人借出。", "她意识到有人正在把旧案推到她面前。"],
      ["第二章 第七把伞", "监控画面里六个人撑着七把伞。", "多出的伞下露出半截旧校牌，只剩一个清字。", "许清想起母亲临终前让她别回雨巷。"],
      ["第三章 旧城区拆迁会", "拆迁说明会中，许清收到失踪者家属递来的纸条。", "纸条写着他们不是失踪，是被留下了。", "大屏幕忽然播放七个孩子站在雨巷尽头的录像。"],
      ["第四章 蓝色指纹", "韩序送检指纹，发现它来自停产儿童药膏。", "许清查到十七年前雨巷有火灾，医院旧账上多出七笔匿名治疗费。", "付款人写着许清父亲的名字。"],
      ["第五章 回声电话", "凌晨一点，档案馆电话响起，对面只有雨声。", "一个孩子喊她姐姐，说她答应过回来接大家。", "信号定位却指向拆除十年的福利院。"],
      ["第六章 档案之外", "许清在父亲书房墙缝里找到一盒底片。", "底片上没有凶手，只有七个被迫改名的孩子。", "她意识到父亲也许曾试图救人。"],
      ["第七章 第一个幸存者", "许清和韩序找到花店老板温禾。", "温禾见到蓝色指纹后想起捉迷藏游戏。", "第一个幸存者开始松口。"],
      ["第八章 福利院旧址", "福利院旧址变成停车场，地下却保留着未登记房间。", "入口被水泥封住，日期正是火灾后三天。", "许清听见记忆里的孩子说轮到你找我们了。"],
      ["第九章 地下室", "地下室里没有尸骨，只有七张小床和被熏黑的墙。", "墙上反复刻着清清两个字。", "许清想起自己曾答应大家一定会回来。"],
      ["第十章 罗院长", "罗院长在养老院里问还有几个活着。", "她承认当年改名分散孩子是绝境里的交易。", "她念出一个仍在城市新闻里的名字。"],
      ["第十一章 开发商的家宴", "周启明邀请许清参加家宴，试图用大局劝她沉默。", "他说公开旧案会毁掉活着的人。", "许清看清沉默如何被包装成体面。"],
      ["第十二章 第二份卷宗", "许清在保险柜里找到完整卷宗和父亲的信。", "信中写着如果她读到这里，说明父亲没能把她带出雨里。", "她决定实名公开雨巷档案。"]
    ]
  },
  {
    id: "city",
    title: "风从南城来",
    author: "林屿",
    category: "都市",
    targetWords: "约18万字",
    readers: "适合25-50岁，喜欢现实情感、职场转身与城市烟火的读者",
    heat: "74.9万热度",
    color: "linear-gradient(160deg, #b34b28, #e3a35e)",
    mark: "城",
    hook: "离职设计师程一诺回到老街，发现要救下的不只是街区，还有一群成年人的体面。",
    desc: "现实向都市群像，写中年压力、青年选择、家庭修复与地方商业重生。",
    profile: ["程一诺", "周远行", "南城老街、旧书店、夜市和改造会议室之间", "租金、投资回报、居民生计和自我重建同时摆在桌面上", "风铃、旧木门、糖水香、雨后的石板路和电脑屏幕上的预算表", "一座城市更新时，普通人的生活能否不被当成成本删掉", "她和周远行既有旧情，也有价值观的拉扯，谁都不能轻易说服谁", "她开始相信，成年人真正的重来不是逃离过去，而是把过去改造成还能继续生活的地方"],
    chapters: [
      ["第一章 回南城", "程一诺带着离职确认回到南城老街。", "儿时书店被贴上拆迁告示，老板把钥匙交给她。", "她原本只是回来休息，却接下了改造难题。"],
      ["第二章 旧书店的新图纸", "改造图漂亮得像样板间，却没有给老店留下位置。", "程一诺见到负责项目的旧同学周远行。", "她说城市不是只给胜利者住的。"],
      ["第三章 夜市灯", "程一诺把临时夜市做成公开测试。", "第一串灯亮起后，客流在三天内翻了四倍。", "老街证明自己还有被选择的价值。"],
      ["第四章 成年人的账本", "程一诺逐户访谈，发现每家店都有自己的账和难处。", "她开始理解空间背后是一个个成年人勉强撑住的生活。", "她把老街定义为仍在呼吸的生活系统。"],
      ["第五章 风暴会", "公开评审会上，竞争团队拿出更漂亮的商业模型。", "程一诺只放凌晨包子铺和深夜书店的视频。", "她说街区价值不该只在报表里被看见。"],
      ["第六章 留下来的人", "方案通过后，真正困难的日子才开始。", "周远行递来合伙协议，并写下想看看南城能不能赢。", "程一诺承认自己是回来选择生活。"],
      ["第七章 第一笔租金", "老街项目第一道难题是租金。", "程一诺公开成本表，让商户第一次看见真实亏损。", "她说情怀不能抵账，但账本也不能只算房租。"],
      ["第八章 母亲的担心", "程母看见女儿趴在预算表前睡着。", "她没有再劝稳定，只问女儿是否又要把自己耗空。", "程一诺醒来看到纸条，终于感觉有人站在身后。"],
      ["第九章 试营业", "试营业那天下雨，程一诺以为无人到来。", "一把把伞从巷口靠近，旧店各自拿出新节目。", "周远行承认这不是浪漫主义，而是更慢更扎实的商业。"],
      ["第十章 热搜之后", "老街视频上了热搜，赞美和质疑一起涌来。", "程一诺删掉过度煽情文案，让镜头还给真实经营。", "她不想把普通人包装成消费景观。"],
      ["第十一章 周远行的选择", "总部要求压缩公共空间增加出租面积。", "周远行把新方案锁进抽屉，第一次站到程一诺这边。", "程一诺知道成年人之间的信任不能只靠一句话。"],
      ["第十二章 南城工作室", "程一诺注册南城来风工作室。", "第一位客户不是大公司，而是街角早餐店。", "她决定只接愿意把人当人看的项目。"]
    ]
  },
  {
    id: "light",
    title: "便利店魔法师",
    author: "北桥",
    category: "轻小说",
    targetWords: "约12万字",
    readers: "适合20-40岁，喜欢轻松奇幻、日常喜剧与治愈冒险的读者",
    heat: "66.7万热度",
    color: "linear-gradient(160deg, #7b5ca8, #e49ab0)",
    mark: "魔",
    hook: "失业青年周眠接手夜班便利店，发现收银机能接异世界订单。",
    desc: "用便利店日常承接奇幻任务，笑点来自规则错位，情感核心是普通人也能成为避风港。",
    profile: ["周眠", "伊芙", "夜班便利店、货架后门和异世界街道之间", "订单、差评、结界、骑士团投诉和工资表同时追着他跑", "收银机提示音、关东煮热气、便利贴、优惠券和两个月亮下的街灯", "一个普通打工人是否也能守住两个世界的和平", "他和伊芙一个习惯吐槽，一个认真得过分，却总在混乱里互相补位", "他叹气归叹气，还是把工牌别正，因为下一位顾客已经推门进来了"],
    chapters: [
      ["第一章 夜班订单", "凌晨两点十三分，便利店走进一只会说话的纸袋。", "订单要求关东煮、月亮碎片和修好结界的热牛奶。", "周眠决定先问会员价还是原价。"],
      ["第二章 货架后门", "薯片货架后多了一扇通往异世界的门。", "异世界公主伊芙冲进店里，问便利店能否提供政治避难。", "周眠给她指向员工休息室。"],
      ["第三章 打折结界", "修复结界需要盐、笑声和没用完的优惠券。", "周眠把优惠券贴到收银台，便利店浮了起来。", "怪物第一次见识低成本魔法。"],
      ["第四章 差评诅咒", "骑士团团长投诉饭团太冷，差评变成诅咒。", "周眠的影子开始替他写辞职信。", "他必须在天亮前完成跨世界售后。"],
      ["第五章 龙与库存表", "便利店冷库里睡着一条小龙。", "小龙每打喷嚏，冰柜就多出雪糕。", "周眠任命它为供应链顾问。"],
      ["第六章 早班来临", "早班店长提前到店，看见公主拖地、小龙盘点。", "周眠以为自己完了，店长却问他终于看见它们了。", "便利店原来是两个世界的服务窗口。"],
      ["第七章 新员工培训", "店长拿出跨世界服务窗口员工手册。", "规则包括不能向龙出售打火机，公主赊账要签字。", "周眠发现离职流程写着等世界和平稳定再说。"],
      ["第八章 骑士团投诉", "黑曜骑士团投诉便利店向敌对阵营出售热饮。", "周眠提醒他们刚办了团购会员。", "骑士团团长上门不是打架，而是取消自动续费。"],
      ["第九章 失踪的收银机", "收银机留下小票离家出走。", "两个世界的订单卡住，顾客排队抱怨。", "周眠在仓库发现收银机和小龙讨论成立工会。"],
      ["第十章 公主的考试", "伊芙参加现代社会常识考试。", "周眠从交通规则讲到劳动合同。", "她写下真正王国应让夜班员工准时下班。"],
      ["第十一章 黑曜折扣日", "骑士团趁周年庆折扣削弱结界发动袭击。", "周眠把满减券改成和平券，进店必须临时停战。", "战争气氛被拼单洗衣液打散。"],
      ["第十二章 临时店长", "沈岚受伤后，周眠接任临时店长。", "他在办公室看见历任守门人照片。", "原来守住世界的人常常只是普通人。"]
    ]
  },
  {
    id: "cloud",
    title: "云上茶馆",
    author: "闻舟",
    category: "治愈",
    targetWords: "约10万字",
    readers: "适合25-50岁，喜欢温柔奇幻、人生议题与单元故事的读者",
    heat: "52.3万热度",
    color: "linear-gradient(160deg, #88a58f, #d7be77)",
    mark: "茶",
    hook: "云层边缘有一间茶馆，专门接待那些在人生路口暂时走丢的人。",
    desc: "每卷一位客人，整体主线是茶馆老板阿瓷寻找自己遗忘的来处。",
    profile: ["阿瓷", "风先生", "云上茶馆、窗外黄昏和被遗忘的地面旧址之间", "客人的遗憾、账本的提醒和她自己丢失的记忆慢慢靠近", "茶雾、云影、旧照片、炉火和杯壁上残留的温度", "告别究竟是忘记，还是终于能把爱交还给生活", "她和风先生像茶与风，一个留下，一个催促，却都知道分别正在接近", "她替别人续上一杯茶时，也感觉自己的故事正被一点点端到面前"],
    chapters: [
      ["第一章 云边小炉", "茶馆开在云层边缘，阿瓷每天只煮三壶茶。", "没有影子的客人抱着一封很重的信，说忘了寄给谁。", "阿瓷告诉他想不起名字的人可以先想起味道。"],
      ["第二章 没寄出的信", "信纸上没有地址，只有反复擦掉的道歉。", "茶杯里映出一间老屋和一个等了很久的背影。", "阿瓷知道有些话迟到很久也值得说完。"],
      ["第三章 风的回执", "清晨门口多了一片湿润花瓣。", "客人笑着说原来风真的会送信。", "账本最后一页提醒阿瓷等她想起来，茶馆就会关门。"],
      ["第四章 迟到的父亲", "一名中年男人带着儿童游乐园门票来到茶馆。", "他说自己只是加了一会儿班，女儿就长大了。", "云外出现一座只在回忆里开门的游乐园。"],
      ["第五章 借来的春天", "退休教师带着空花盆，想再看一次学生们种下的春天。", "花盆在云层里冒出绿芽，每片叶子写着学生后来的人生。", "老人终于知道他们都好好长大了。"],
      ["第六章 阿瓷的名字", "茶馆第一次没有客人，风在门外敲了三下。", "门缝里塞进旧照片，照片上有年轻的她和地面茶馆。", "背面写着她不是老板，而是最后一位客人。"],
      ["第七章 少年画家", "少年画家背着空画框来到茶馆。", "他害怕失败，所以三年画不出任何东西。", "白茶茶雾里出现他十岁画下的第一片天空。"],
      ["第八章 没完成的画", "画框里的天空并不漂亮，却让少年红了眼眶。", "他说自己后来不知道该为什么画。", "阿瓷告诉他茶馆只收愿意继续开始的人。"],
      ["第九章 风先生", "风先生第一次在白天出现，袖口沾着地面茶馆的尘土。", "他提醒阿瓷不要过度介入客人的人生。", "他说她忘了自己为什么不肯走。"],
      ["第十章 地面茶馆", "阿瓷梦见自己曾叫陈知夏。", "梦里有暴雨、山体滑坡和她推出最后一位客人的画面。", "账本浮现一句话：你也有一封没寄出的信。"],
      ["第十一章 给自己的信", "阿瓷找到半封写给自己的信。", "信中说如果忘了害怕，请记得那天不是一个人活下来的。", "云层裂开一道缝，露出地面世界的灯。"],
      ["第十二章 下一位客人", "小女孩抱着破茶杯来找陈知夏。", "阿瓷终于想起那场雨和自己的承诺。", "她打开门，迎接下一位客人。"]
    ]
  }
];

const novels = bookSeeds.map((book) => ({
  ...book,
  profile: {
    protagonist: book.profile[0],
    partner: book.profile[1],
    place: book.profile[2],
    pressure: book.profile[3],
    texture: book.profile[4],
    question: book.profile[5],
    relation: book.profile[6],
    ending: book.profile[7]
  },
  chapters: book.chapters.map(([title, ...content]) => ({ title, content }))
}));

const state = { category: "全部", keyword: "", currentNovelId: novels[0].id, currentChapter: 0 };
const categories = ["全部", ...new Set(novels.map((novel) => novel.category))];
const $ = (selector) => document.querySelector(selector);
const categoryTabs = $("#categoryTabs");
const novelGrid = $("#novelGrid");
const rankingList = $("#rankingList");
const searchInput = $("#searchInput");
const themeToggle = $("#themeToggle");
const readerTitle = $("#readerTitle");
const readerCategory = $("#readerCategory");
const readerAuthor = $("#readerAuthor");
const chapterTitle = $("#chapterTitle");
const chapterContent = $("#chapterContent");
const chapterList = $("#chapterList");
const prevChapter = $("#prevChapter");
const nextChapter = $("#nextChapter");

function countText(text) {
  return text.replace(/\s/g, "").length;
}

function getCurrentNovel() {
  return novels.find((novel) => novel.id === state.currentNovelId) || novels[0];
}

function makeExpandedContent(novel, chapter, chapterIndex) {
  const p = novel.profile;
  const beats = chapter.content;
  const chapterNumber = chapterIndex + 1;
  const opening = beats[0];
  const turn = beats[1] || opening;
  const close = beats[2] || beats[beats.length - 1] || opening;
  const paragraphs = [
    `${opening}这一刻并不轰烈，甚至有些安静，可${p.protagonist}很快意识到，真正改变命运的事往往不会提前敲锣打鼓。${p.place}的空气像被拧紧，所有细小声响都变得清楚：脚步、呼吸、远处人群压低的交谈，还有自己心里那一下不肯落地的迟疑。`,
    `他原本可以把这件事当成偶然，也可以像过去许多次那样，把不该看的东西重新盖好，把不该问的话咽回去。成年人最熟练的本事就是假装没有看见风险，因为看见之后就必须负责。可${chapter.title}把所有退路都缩成一条窄线，他只要再往前一步，身后熟悉的生活就会开始松动。`,
    `${turn}${p.partner}没有立刻催他，只在旁边观察他的神色。两个人都明白，局面已经不是简单的选择题。每一个答案后面都挂着代价，代价后面又牵着别人真实的生活。${p.pressure}，像几股看不见的绳索，正从不同方向把他们拖向同一个中心。`,
    `周围的细节在这时变得异常鲜明。${p.texture}一起挤进感官里，让这件事不再像传闻或档案上的几行字，而像一只伸到眼前的手。${p.protagonist}想起自己过去相信过的秩序，也想起那些秩序背后从未被认真听见的人。所谓成熟，很多时候不是学会冷漠，而是知道冷漠可以让自己轻松，却会让别人继续坠落。`,
    `他和${p.partner}低声交换了几句。话不多，却都落在要害上。${p.partner}提醒他，不要把勇气想得太干净，也不要把犹豫看成懦弱。真正难的是明知道没有完美方案，还要替一个不完美的方案承担后果。${p.protagonist}听完没有马上回答，因为这句话正好戳中了他最不愿承认的地方。`,
    `第${chapterNumber}章的冲突由此往深处推进。表面上，他们面对的是一件具体的危机；更深处，真正被逼问的是${p.question}。这个问题没有人能替他回答，甚至连答案本身都会随着时间改变。年轻时可以只凭热血往前冲，可当他看见更多人的恐惧、账本、亲人和旧伤，就知道热血必须学会和责任站在一起。`,
    `事情开始变得失控。一个细小证据被翻出，一句原本无关紧要的话忽然有了另一层意思，一个曾经被忽略的人站到光下。${p.protagonist}看着这一切，心里生出一种迟来的寒意：原来命运并不是突然转弯，它早已在许多年前铺好了路，只等他们今天走到这里。`,
    `${p.relation}。这种关系让他的判断变得迟缓，也让他的行动更像一个真正的人，而不是只为剧情奔跑的影子。他会愤怒，会怀疑，会短暂地想把责任推开；可他也会在沉默之后重新抬头，因为他知道逃避只能换来一夜安稳，换不来明天。`,
    `中段最艰难的地方，是他们必须把线索变成行动。${p.partner}提出一个冒险方案，旁人听来近乎莽撞，却是眼下唯一能撬开僵局的缝隙。${p.protagonist}反复推算其中的风险，发现每条路都有人会受伤。于是他不再寻找绝对正确，只开始寻找最不辜负人的那一种。`,
    `行动开始后，节奏忽然加快。外部压力逼近，误会扩大，旧秘密露出一角，支持者和反对者都用自己的方式把他往前推。${close}这句话像一枚钉子，把本章所有散开的情绪钉在一起。${p.protagonist}终于明白，这不是单独属于他的遭遇，而是一群人积压太久的选择在今天集中爆发。`,
    `到了夜深或风停的时候，他短暂地获得了一点安静。那点安静并不带来胜利，只让人更清楚地看见损失。有人对他失望，有人因他重新燃起希望，还有人只是希望明天不要变得更坏。${p.protagonist}把这些目光一一记住，因为它们比任何誓言都沉，也比任何掌声都真实。`,
    `${p.ending}本章结束时，问题没有真正解决，只是被推向更大的地方。可这正是长篇故事该有的呼吸：每一次解决都打开新的门，每一次靠近真相都带来新的代价。${p.protagonist}站在门前，已经听见下一章的声音从门后传来。`
  ];
  const extras = [
    "他没有把这种动摇告诉任何人。人到了一定年纪就会明白，并不是所有脆弱都适合展示，也不是所有坚强都值得夸耀。真正要紧的是，在心里最乱的时候，手上的事仍然不能停。",
    "更麻烦的是，旁观者总希望事情立刻有一个清楚的善恶结论，可亲历者知道，许多错误都披着不得已的外衣，许多正确也要先踩过泥水才能抵达。",
    "所以他只能继续往前。不是因为他确信自己一定会赢，而是因为退回去意味着承认那些被压住的声音不重要。这个念头让他疲惫，也让他慢慢变得坚定。"
  ];
  let index = 0;
  while (countText(paragraphs.join("")) < 1900) {
    paragraphs.splice(paragraphs.length - 1, 0, extras[index % extras.length]);
    index += 1;
  }
  return paragraphs;
}

function renderCategories() {
  categoryTabs.innerHTML = categories
    .map((category) => `<button class="${category === state.category ? "active" : ""}" type="button" data-category="${category}">${category}</button>`)
    .join("");
}

function getFilteredNovels() {
  const keyword = state.keyword.trim().toLowerCase();
  return novels.filter((novel) => {
    const matchesCategory = state.category === "全部" || novel.category === state.category;
    const text = `${novel.title} ${novel.author} ${novel.category} ${novel.desc} ${novel.hook} ${novel.readers}`.toLowerCase();
    return matchesCategory && (!keyword || text.includes(keyword));
  });
}

function renderNovels() {
  const filtered = getFilteredNovels();
  novelGrid.innerHTML = filtered.length
    ? filtered
        .map(
          (novel) => `
        <article class="novel-card">
          <div class="cover" style="background:${novel.color}">${novel.mark}</div>
          <div>
            <h3>${novel.title}</h3>
            <div class="novel-meta">${novel.category} · ${novel.author} · ${novel.targetWords}</div>
            <p class="novel-hook">${novel.hook}</p>
            <p class="novel-desc">${novel.desc}</p>
            <a class="read-link" href="#reader" data-read="${novel.id}">开始阅读</a>
          </div>
        </article>`
        )
        .join("")
    : `<div class="empty-state">没有找到匹配的小说，换个关键词试试。</div>`;
}

function renderRanking() {
  rankingList.innerHTML = novels
    .slice(0, 5)
    .map((novel) => `<li><strong>${novel.title}</strong><span>${novel.category} · ${novel.targetWords} · ${novel.heat}</span></li>`)
    .join("");
}

function renderReader() {
  const novel = getCurrentNovel();
  const chapter = novel.chapters[state.currentChapter];
  const expandedContent = makeExpandedContent(novel, chapter, state.currentChapter);
  const chapterWords = countText(expandedContent.join(""));
  readerTitle.textContent = novel.title;
  readerCategory.textContent = `${novel.category} · ${novel.targetWords}`;
  readerAuthor.textContent = `${novel.author} · 本章约${chapterWords}字`;
  chapterTitle.textContent = chapter.title;
  chapterContent.innerHTML = [`<p class="reader-intro">${novel.readers}</p>`, ...expandedContent.map((paragraph) => `<p>${paragraph}</p>`)].join("");
  chapterList.innerHTML = novel.chapters
    .map((item, index) => `<button class="${index === state.currentChapter ? "active" : ""}" type="button" data-chapter="${index}">${item.title}</button>`)
    .join("");
  prevChapter.disabled = state.currentChapter === 0;
  nextChapter.disabled = state.currentChapter === novel.chapters.length - 1;
}

function setNovel(novelId) {
  state.currentNovelId = novelId;
  state.currentChapter = 0;
  renderReader();
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderNovels();
});

novelGrid.addEventListener("click", (event) => {
  const link = event.target.closest("[data-read]");
  if (link) setNovel(link.dataset.read);
});

chapterList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-chapter]");
  if (!button) return;
  state.currentChapter = Number(button.dataset.chapter);
  renderReader();
});

searchInput.addEventListener("input", (event) => {
  state.keyword = event.target.value;
  renderNovels();
});

prevChapter.addEventListener("click", () => {
  if (state.currentChapter > 0) {
    state.currentChapter -= 1;
    renderReader();
  }
});

nextChapter.addEventListener("click", () => {
  const novel = getCurrentNovel();
  if (state.currentChapter < novel.chapters.length - 1) {
    state.currentChapter += 1;
    renderReader();
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("novel-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("novel-theme") === "dark") document.body.classList.add("dark");

renderCategories();
renderNovels();
renderRanking();
renderReader();
