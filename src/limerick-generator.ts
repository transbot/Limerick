export type Language = 'chinese' | 'english';
export type UILanguage = 'chinese' | 'english';

// English limerick templates with placeholders
const englishTemplates = [
  [
    "There once was a {person} from {place}",
    "Who had a most {adjective} {trait}",
    "They would {action}",
    "With great {emotion}",
    "And always kept up with the {pace}"
  ],
  [
    "A {adjective} young {person} named {name}",
    "Decided to play a fun {game}",
    "They {action1} and {action2}",
    "Until they were {adjective2}",
    "But still they continued the {game}"
  ],
  [
    "I wish you success with your {dreams}",
    "It's easy if we work in {teams}",
    "So all in due {course}",
    "Let's give it more {force}",
    "It isn't as tough as it {seems}"
  ],
  [
    "There was an old {person} quite {wise}",
    "Who loved to eat {food} and {pies}",
    "They would {action}",
    "With pure {satisfaction}",
    "And always had {twinkle} in their eyes"
  ],
  [
    "A {creature} once lived by the {sea}",
    "Who was as {adjective} as can be",
    "It would {action1}",
    "And {action2} with glee",
    "Living life so wild and so {free}"
  ],
  [
    "There once was a {person} so {bright}",
    "Who stayed up to read every {night}",
    "With {book} in their {hand}",
    "They'd {understand}",
    "And wake up with knowledge so {light}"
  ],
  [
    "A {musician} from old {city}",
    "Played songs that were {pretty}",
    "With {instrument} so {fine}",
    "They'd {shine}",
    "Making music both {witty}"
  ],
  [
    "There lived a young {artist} named {kate}",
    "Who painted from morning till {late}",
    "With {colors} so {bold}",
    "Stories {told}",
    "Their art was considered first-{rate}"
  ],
  [
    "A {chef} who loved cooking with {spice}",
    "Made dishes that tasted so {nice}",
    "They'd {chop} and they'd {dice}",
    "Not once but {twice}",
    "Creating meals worth any {price}"
  ]
];

// Chinese limerick templates
const chineseTemplatesAO = [
  [
    "有个{person}胡子{rhyme1}，",
    "他说：\"{quote}真让人{rhyme2}！\"",
    "一只{animal1}，",
    "两只{animal2}，",
    "全把窝做在我的胡子{rhyme3}！"
  ],
  [
    "从前有位{person}很{rhyme1}，",
    "每天都要{action}真{rhyme2}。",
    "{thing1}和{thing2}，",
    "{thing3}配{thing4}，",
    "生活过得真是太{rhyme3}！"
  ],
  [
    "小城里住着{person}真{rhyme1}，",
    "最爱{hobby}从不觉{rhyme2}。",
    "{time}就{action1}，",
    "{season}便{action2}，",
    "快乐得像{animal}飞翔{rhyme3}！"
  ],
  [
    "有个{adjective}的{person}{rhyme1}，",
    "整天想着{dream}的模{rhyme2}。",
    "{action1}又{action2}，",
    "{feeling1}变{feeling2}，",
    "终于实现了心中的{rhyme3}！"
  ],
  [
    "村里有位{person}大妈，",
    "种的{plant}开满了花。",
    "{color1}的{flower1}，",
    "{color2}的{flower2}，",
    "美得邻居都夸她是仙{rhyme3}！"
  ],
  [
    "有位{profession}本事{rhyme1}，",
    "每日{work}不辞{rhyme2}。",
    "{tool1}配{tool2}，",
    "{skill1}加{skill2}，",
    "手艺精湛人人{rhyme3}！"
  ],
  [
    "小镇住着{person}真{rhyme1}，",
    "院里种满{flower}{rhyme2}。",
    "{season1}时{action1}，",
    "{season2}便{action2}，",
    "四季美景人人{rhyme3}！"
  ],
  [
    "从前有个{adjective}{rhyme1}，",
    "最爱{hobby}不回{rhyme2}。",
    "{morning}就{action1}，",
    "{evening}便{action2}，",
    "快乐得像{animal}飞翔{rhyme3}！"
  ]
];

const chineseTemplatesEI = [
  [
    "村中有位{person}{rhyme1}，",
    "养了一群{animal}{rhyme2}。",
    "{color1}的{type1}，",
    "{color2}的{type2}，",
    "个个都会{skill}{rhyme3}！"
  ],
  [
    "院子里有{person}{rhyme1}，",
    "每天忙着{work}{rhyme2}。",
    "{tool1}和{tool2}，",
    "{material1}配{material2}，",
    "作品精美人人{rhyme3}！"
  ]
];

const chineseTemplatesONG = [
  [
    "村中有位{person}{rhyme1}，",
    "养了一群{animal}{rhyme2}。",
    "{color1}的{type1}，",
    "{color2}的{type2}，",
    "个个都会{skill}{rhyme3}！"
  ]
];

// Word banks for English templates
const englishWords = {
  person: ['fellow', 'lady', 'gentleman', 'scholar', 'teacher', 'doctor', 'sailor', 'baker'],
  place: ['Maine', 'Spain', 'the lane', 'Ukraine', 'the plain', 'the train'],
  adjective: ['peculiar', 'amazing', 'curious', 'delightful', 'wonderful', 'mysterious'],
  trait: ['face', 'grace', 'pace', 'case', 'space', 'race'],
  action: ['dance', 'prance', 'advance', 'romance', 'enhance'],
  emotion: ['passion', 'compassion', 'fashion', 'ration'],
  pace: ['race', 'grace', 'space', 'place', 'face'],
  name: ['Sue', 'Drew', 'Blue', 'Lou', 'Hugh', 'Rue'],
  game: ['same', 'fame', 'name', 'frame', 'claim', 'shame'],
  action1: ['jumped', 'danced', 'pranced', 'laughed', 'played'],
  action2: ['stumbled', 'tumbled', 'mumbled', 'grumbled', 'rumbled'],
  adjective2: ['tired', 'wired', 'inspired', 'required', 'desired'],
  dreams: ['schemes', 'themes', 'creams', 'streams', 'beams'],
  teams: ['seems', 'dreams', 'schemes', 'streams', 'themes'],
  course: ['source', 'force', 'horse', 'morse', 'norse'],
  force: ['course', 'source', 'horse', 'morse', 'norse'],
  seems: ['dreams', 'teams', 'schemes', 'streams', 'themes'],
  wise: ['size', 'prize', 'rise', 'flies', 'tries'],
  food: ['good', 'mood', 'wood', 'hood', 'stood'],
  pies: ['tries', 'flies', 'size', 'prize', 'wise'],
  satisfaction: ['action', 'fraction', 'attraction', 'distraction'],
  twinkle: ['wrinkle', 'sprinkle', 'crinkle', 'tinkle'],
  creature: ['teacher', 'preacher', 'feature', 'nature'],
  sea: ['free', 'tree', 'spree', 'key', 'glee'],
  free: ['sea', 'tree', 'spree', 'key', 'glee'],
  bright: ['night', 'light', 'sight', 'height', 'flight'],
  night: ['bright', 'light', 'sight', 'height', 'flight'],
  book: ['look', 'took', 'cook', 'hook', 'brook'],
  hand: ['land', 'band', 'stand', 'grand', 'planned'],
  understand: ['command', 'demand', 'expand', 'withstand'],
  light: ['bright', 'night', 'sight', 'height', 'flight'],
  musician: ['magician', 'technician', 'physician', 'politician'],
  city: ['pretty', 'witty', 'gritty', 'committee'],
  pretty: ['city', 'witty', 'gritty', 'committee'],
  instrument: ['monument', 'document', 'ornament', 'element'],
  fine: ['shine', 'line', 'wine', 'mine', 'pine'],
  shine: ['fine', 'line', 'wine', 'mine', 'pine'],
  witty: ['city', 'pretty', 'gritty', 'committee'],
  artist: ['smartest', 'hardest', 'largest', 'sharpest'],
  kate: ['late', 'rate', 'gate', 'fate', 'state'],
  late: ['kate', 'rate', 'gate', 'fate', 'state'],
  colors: ['dollars', 'scholars', 'collars', 'hollers'],
  bold: ['told', 'gold', 'old', 'cold', 'sold'],
  told: ['bold', 'gold', 'old', 'cold', 'sold'],
  rate: ['kate', 'late', 'gate', 'fate', 'state'],
  chef: ['deaf', 'ref', 'clef', 'jeff', 'chef'],
  spice: ['nice', 'price', 'dice', 'twice', 'ice'],
  nice: ['spice', 'price', 'dice', 'twice', 'ice'],
  chop: ['stop', 'top', 'drop', 'shop', 'hop'],
  dice: ['spice', 'nice', 'price', 'twice', 'ice'],
  twice: ['spice', 'nice', 'price', 'dice', 'ice'],
  price: ['spice', 'nice', 'dice', 'twice', 'ice']
};

// Chinese rhyme groups - organized by final sound
const chineseRhymesAO = {
  rhyme1: ['高', '豪', '好', '老', '小', '巧'],
  rhyme2: ['遥', '娇', '妙', '少', '早', '跳'],
  rhyme3: ['牢', '糟', '包', '抱', '找', '笑'],
  person: ['老头儿', '小伙子', '大爷', '姑娘', '先生', '太太', '书生', '农夫'],
  profession: ['木匠', '铁匠', '裁缝', '厨师', '画师', '乐师'],
  work: ['干活', '创作', '练习', '钻研', '琢磨', '忙碌'],
  tool1: ['锤子', '剪刀', '画笔', '乐器', '针线', '刻刀'],
  tool2: ['钉子', '布料', '颜料', '琴弦', '丝线', '木料'],
  skill1: ['巧手', '妙思', '细心', '专注', '耐心', '创意'],
  skill2: ['匠心', '灵感', '技艺', '功夫', '手艺', '天赋'],
  quote: ['这事儿', '那东西', '这情况', '那场面', '这景象'],
  animal1: ['母鸡', '野鸭', '麻雀', '喜鹊', '燕子', '布谷鸟'],
  animal2: ['猫头鹰', '百灵鸟', '夜莺', '金丝雀', '鹦鹉', '啄木鸟'],
  adjective: ['聪明', '勤劳', '善良', '有趣', '机灵', '能干'],
  action: ['读书', '唱歌', '画画', '写字', '种花', '做饭'],
  thing1: ['茶壶', '花瓶', '书本', '笔墨', '棋子', '乐器'],
  thing2: ['茶杯', '鲜花', '纸张', '砚台', '棋盘', '琴弦'],
  thing3: ['诗词', '书法', '音乐', '绘画', '舞蹈', '戏曲'],
  thing4: ['歌赋', '文章', '节拍', '色彩', '身段', '唱腔'],
  hobby: ['下棋', '钓鱼', '养花', '练字', '弹琴', '画画'],
  time: ['清晨', '上午', '中午', '下午', '傍晚', '夜里'],
  action1: ['练功', '读书', '写字', '画画', '唱歌', '跳舞'],
  season: ['春天', '夏日', '秋季', '冬月', '雨季', '雪天'],
  action2: ['赏花', '避暑', '登高', '围炉', '听雨', '踏雪'],
  animal: ['燕子', '蝴蝶', '蜜蜂', '小鸟', '仙鹤', '凤凰'],
  dream: ['成功', '幸福', '美好', '理想', '愿望', '梦想'],
  feeling1: ['忧愁', '烦恼', '困惑', '迷茫', '焦虑', '不安'],
  feeling2: ['欢喜', '快乐', '开心', '满足', '安心', '舒畅'],
  hope: ['理想', '愿望', '梦想', '希望', '目标', '追求']
};

const chineseRhymesEI = {
  rhyme1: ['美', '贵', '累', '醉', '对', '配'],
  rhyme2: ['飞', '归', '回', '追', '陪', '堆'],
  rhyme3: ['夸', '花', '家', '华', '茶', '霞'],
  person: ['老头儿', '小伙子', '大爷', '姑娘', '先生', '太太'],
  animal: ['蝴蝶', '蜜蜂', '蜻蜓', '萤火虫', '知了', '蟋蟀'],
  type1: ['蝴蝶', '蜜蜂', '蜻蜓', '萤火虫', '知了', '蟋蟀'],
  type2: ['蚂蚱', '螳螂', '瓢虫', '金龟子', '天牛', '蚕宝宝'],
  color1: ['红色', '黄色', '绿色', '蓝色', '紫色', '黑色'],
  color2: ['白色', '粉色', '橙色', '青色', '棕色', '灰色'],
  skill: ['唱歌', '跳舞', '变色', '发光', '飞翔', '爬树'],
  plant: ['牡丹', '玫瑰', '茉莉', '桂花', '荷花', '菊花'],
  flower1: ['牡丹', '玫瑰', '月季', '海棠', '芍药', '蔷薇'],
  flower2: ['茉莉', '桂花', '兰花', '菊花', '梅花', '荷花'],
  color1: ['红色', '粉色', '紫色', '白色', '黄色', '蓝色'],
  color2: ['白色', '粉色', '紫色', '红色', '黄色', '蓝色'],
  season1: ['春日', '夏天', '秋季', '冬月', '雨天', '晴日'],
  season2: ['秋天', '冬日', '春季', '夏月', '雪天', '阴日'],
  morning: ['清晨', '早上', '黎明', '日出', '晨光', '破晓'],
  evening: ['黄昏', '傍晚', '日落', '夕阳', '暮色', '夜幕']
};

const chineseRhymesONG = {
  rhyme1: ['翁', '公', '雄', '红', '东', '中'],
  rhyme2: ['虫', '龙', '风', '空', '穷', '丰'],
  rhyme3: ['功', '工', '通', '同', '从', '松'],
  person: ['老头儿', '小伙子', '大爷', '姑娘', '先生', '太太'],
  animal: ['蝴蝶', '蜜蜂', '蜻蜓', '萤火虫', '知了', '蟋蟀'],
  type1: ['蝴蝶', '蜜蜂', '蜻蜓', '萤火虫', '知了', '蟋蟀'],
  type2: ['蚂蚱', '螳螂', '瓢虫', '金龟子', '天牛', '蚕宝宝'],
  color1: ['红色', '黄色', '绿色', '蓝色', '紫色', '黑色'],
  color2: ['白色', '粉色', '橙色', '青色', '棕色', '灰色'],
  skill: ['唱歌', '跳舞', '变色', '发光', '飞翔', '爬树']
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function fillTemplate(template: string[], words: Record<string, string[]>): string[] {
  return template.map(line => {
    return line.replace(/\{([^}]+)\}/g, (match, key) => {
      const wordList = words[key];
      if (wordList && wordList.length > 0) {
        return getRandomElement(wordList);
      }
      return match; // Return original if no replacement found
    });
  });
}

export function generateLimerick(language: Language): string[] {
  if (language === 'english') {
    const template = getRandomElement(englishTemplates);
    return fillTemplate(template, englishWords);
  } else {
    // Randomly select a rhyme group and corresponding template
    const rhymeGroups = [
      { templates: chineseTemplatesAO, words: chineseRhymesAO },
      { templates: chineseTemplatesEI, words: chineseRhymesEI },
      { templates: chineseTemplatesONG, words: chineseRhymesONG }
    ];
    
    const selectedGroup = getRandomElement(rhymeGroups);
    const template = getRandomElement(selectedGroup.templates);
    return fillTemplate(template, selectedGroup.words);
  }
}