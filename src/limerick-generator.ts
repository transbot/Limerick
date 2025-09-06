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
  ]
];

// Chinese limerick templates
const chineseTemplates = [
  [
    "有个{person}胡子长，",
    "他说：\"{quote}真让人恐慌！\"",
    "一只{animal1}，",
    "两只{animal2}，",
    "全把窝做在我的胡子上！"
  ],
  [
    "从前有位{person}很{adjective}，",
    "每天都要{action}忙不停。",
    "{thing1}和{thing2}，",
    "{thing3}配{thing4}，",
    "生活过得真是太{feeling}！"
  ],
  [
    "小城里住着{person}一位，",
    "最爱{hobby}从不觉累。",
    "{time}就{action1}，",
    "{season}便{action2}，",
    "快乐得像{animal}飞翔腿！"
  ],
  [
    "有个{adjective}的{person}郎，",
    "整天想着{dream}的模样。",
    "{action1}又{action2}，",
    "{feeling1}变{feeling2}，",
    "终于实现了心中的{hope}！"
  ],
  [
    "村里有位{person}大妈，",
    "种的{plant}开满了花。",
    "{color1}的{flower1}，",
    "{color2}的{flower2}，",
    "美得邻居都夸她是仙家！"
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
  free: ['sea', 'tree', 'spree', 'key', 'glee']
};

// Word banks for Chinese templates
const chineseWords = {
  person: ['老头儿', '小伙子', '大爷', '姑娘', '先生', '太太', '书生', '农夫'],
  quote: ['这事儿', '那东西', '这情况', '那场面', '这景象', '那模样'],
  animal1: ['母鸡', '野鸭', '麻雀', '喜鹊', '燕子', '布谷鸟'],
  animal2: ['猫头鹰', '百灵鸟', '夜莺', '金丝雀', '鹦鹉', '啄木鸟'],
  adjective: ['聪明', '勤劳', '善良', '有趣', '机灵', '能干'],
  action: ['读书', '唱歌', '画画', '写字', '种花', '做饭'],
  thing1: ['茶壶', '花瓶', '书本', '笔墨', '棋子', '乐器'],
  thing2: ['茶杯', '鲜花', '纸张', '砚台', '棋盘', '琴弦'],
  thing3: ['诗词', '书法', '音乐', '绘画', '舞蹈', '戏曲'],
  thing4: ['歌赋', '文章', '节拍', '色彩', '身段', '唱腔'],
  feeling: ['开心', '满足', '充实', '愉快', '舒心', '惬意'],
  hobby: ['下棋', '钓鱼', '养花', '练字', '弹琴', '画画'],
  time: ['清晨', '上午', '中午', '下午', '傍晚', '夜里'],
  action1: ['练功', '读书', '写字', '画画', '唱歌', '跳舞'],
  season: ['春天', '夏日', '秋季', '冬月', '雨季', '雪天'],
  action2: ['赏花', '避暑', '登高', '围炉', '听雨', '踏雪'],
  animal: ['燕子', '蝴蝶', '蜜蜂', '小鸟', '仙鹤', '凤凰'],
  dream: ['成功', '幸福', '美好', '理想', '愿望', '梦想'],
  feeling1: ['忧愁', '烦恼', '困惑', '迷茫', '焦虑', '不安'],
  feeling2: ['欢喜', '快乐', '开心', '满足', '安心', '舒畅'],
  hope: ['理想', '愿望', '梦想', '希望', '目标', '追求'],
  plant: ['牡丹', '玫瑰', '茉莉', '桂花', '荷花', '菊花'],
  flower1: ['牡丹', '玫瑰', '月季', '海棠', '芍药', '蔷薇'],
  flower2: ['茉莉', '桂花', '兰花', '菊花', '梅花', '荷花'],
  color1: ['红色', '粉色', '紫色', '白色', '黄色', '蓝色'],
  color2: ['白色', '粉色', '紫色', '红色', '黄色', '蓝色']
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
    const template = getRandomElement(chineseTemplates);
    return fillTemplate(template, chineseWords);
  }
}