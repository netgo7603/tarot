
import { TarotCardData } from './types';

export const MAJOR_ARCANA: TarotCardData[] = [
  {
    id: 0,
    name: "The Fool",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    meaning: "New beginnings, optimism, trust in life.",
    interpretations: {
      general: "새로운 시작과 모험의 기운이 가득합니다. 두려움 없이 발걸음을 내딛으세요.",
      love: "새로운 인연이 나타날 수 있는 시기입니다. 마음을 열고 순수한 감정을 따르세요.",
      wealth: "새로운 투자 기회가 올 수 있으나, 신중함도 잊지 말아야 합니다.",
      past: "과거에 당신은 큰 리스크를 감수하며 새로운 길을 시작했습니다.",
      present: "현재 당신은 자유로운 영혼처럼 새로운 가능성에 직면해 있습니다.",
      future: "미래에는 예상치 못한 즐거운 변화가 찾아올 것입니다."
    }
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    meaning: "Action, power, manifestation.",
    interpretations: {
      general: "당신에겐 필요한 모든 능력이 이미 있습니다. 이제 실행에 옮길 때입니다.",
      love: "자신감 있는 태도가 매력을 더해줍니다. 원하는 관계를 스스로 만들어갈 힘이 있습니다.",
      wealth: "아이디어가 곧 돈이 되는 시기입니다. 자신의 기술을 활용해 수익을 창출하세요.",
      past: "당신의 노력과 기술이 기반이 되어 현재의 위치에 도달했습니다.",
      present: "자신의 능력을 발휘하여 상황을 주도적으로 이끌고 있습니다.",
      future: "곧 당신의 계획이 구체적인 결실을 맺게 될 것입니다."
    }
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    meaning: "Intuition, sacred knowledge, subconscious mind.",
    interpretations: {
      general: "직관에 귀를 기울이세요. 겉으로 드러나지 않은 비밀이나 통찰이 중요해집니다.",
      love: "신중하고 신비로운 관계의 흐름이 있습니다. 상대방의 내면을 깊이 들여다보세요.",
      wealth: "재물운에서는 서두르지 말고 정보를 수집하며 때를 기다리는 것이 좋습니다.",
      past: "내면의 성찰과 공부가 당신을 지혜롭게 만들었던 시기가 있었습니다.",
      present: "지금은 행동보다 관찰하고 생각하는 시간이 필요한 때입니다.",
      future: "숨겨져 있던 진실이 밝혀지며 당신에게 유리한 상황이 전개될 것입니다."
    }
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/RWS_Tarot_03_Empress.jpg",
    meaning: "Femininity, beauty, nature, nurturing, abundance.",
    interpretations: {
      general: "풍요로움과 창조적인 에너지가 넘칩니다. 주변을 보살피고 아름다움을 즐기세요.",
      love: "안정적이고 따뜻한 애정운입니다. 서로를 돌보는 깊은 사랑을 느낄 수 있습니다.",
      wealth: "물질적인 풍요가 따르는 시기입니다. 투자나 사업에서 좋은 결실이 예상됩니다.",
      past: "당신은 안정적이고 풍요로운 환경에서 에너지를 비축해왔습니다.",
      present: "현재 많은 것들이 성장하고 번영하는 단계에 있습니다.",
      future: "미래에는 더욱 큰 안락함과 물질적 보상이 기다리고 있습니다."
    }
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    meaning: "Authority, structure, control, a father figure.",
    interpretations: {
      general: "질서와 규율이 필요합니다. 리더십을 발휘하여 상황을 장악해야 할 때입니다.",
      love: "책임감 있는 관계가 강조됩니다. 때로는 너무 완고하지 않도록 주의하세요.",
      wealth: "체계적인 자금 관리가 중요합니다. 확실한 계획 아래 재산을 증식할 수 있습니다.",
      past: "과거의 엄격한 규율과 노력이 현재의 기반을 닦았습니다.",
      present: "권위와 책임을 가지고 중요한 결정을 내려야 하는 상황입니다.",
      future: "안정적인 지위와 확고한 성취를 얻게 될 것입니다."
    }
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    meaning: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions.",
    interpretations: {
      general: "전통과 규칙을 따르는 것이 안전한 길입니다. 멘토의 조언을 구해보세요.",
      love: "사회적 규범에 맞는 안정적인 연애를 지향합니다. 결혼이나 공식적인 관계가 어울립니다.",
      wealth: "검증된 방식의 저축이나 투자가 유리합니다. 새로운 시도보다는 안정을 택하세요.",
      past: "전통적인 교육이나 가르침이 당신의 가치관 형성에 큰 영향을 주었습니다.",
      present: "도덕적 기준과 사회적 약속을 준수하며 평온을 유지하고 있습니다.",
      future: "지혜로운 조언자를 만나거나 정신적인 안정을 찾게 될 것입니다."
    }
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg",
    meaning: "Love, harmony, relationships, values alignment, choices.",
    interpretations: {
      general: "중요한 선택의 기로에 서 있습니다. 당신의 가치관에 맞는 결정을 내리세요.",
      love: "최고의 애정운입니다. 깊은 교감과 열정이 넘치는 관계가 기대됩니다.",
      wealth: "동업자와의 조화가 수익으로 이어집니다. 신뢰를 바탕으로 한 계약에 길운이 있습니다.",
      past: "당신을 행복하게 했던 중요한 관계나 선택이 있었습니다.",
      present: "조화로운 관계 속에서 행복을 느끼거나 중요한 결단을 앞두고 있습니다.",
      future: "진심으로 원하는 파트너십이나 목표를 달성하게 될 것입니다."
    }
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    meaning: "Control, willpower, success, action, determination.",
    interpretations: {
      general: "목표를 향해 강력하게 돌진하세요. 의지가 있다면 어떤 장애물도 넘을 수 있습니다.",
      love: "적극적으로 대시할 때입니다. 사랑을 쟁취하기 위한 용기가 필요한 시기입니다.",
      wealth: "빠른 추진력이 재물을 가져옵니다. 경쟁에서 승리하여 이득을 얻을 운입니다.",
      past: "승리와 극복의 경험이 당신을 강하게 만들었습니다.",
      present: "현재 강한 추진력으로 상황을 이끌며 목표에 다가가고 있습니다.",
      future: "마침내 승전보를 울리며 바라던 성공을 거머쥐게 될 것입니다."
    }
  },
  {
    id: 8,
    name: "Strength",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    meaning: "Strength, courage, persuasion, influence, compassion.",
    interpretations: {
      general: "강압적인 힘보다 부드러운 인내와 설득이 필요합니다. 내면의 힘을 기르세요.",
      love: "상대방의 마음을 이해하고 포용하는 자세가 관계를 더욱 깊게 합니다.",
      wealth: "끈기 있게 자금을 관리해야 합니다. 꾸준한 노력이 결국 풍요로 돌아옵니다.",
      past: "어려운 상황을 인내와 용기로 잘 견뎌냈던 시기가 있었습니다.",
      present: "부드럽지만 강한 카리스마로 주변을 다독이며 상황을 조율하고 있습니다.",
      future: "갈등이 해소되고 조화로운 평화가 당신에게 찾아올 것입니다."
    }
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    meaning: "Soul searching, introspection, being alone, inner guidance.",
    interpretations: {
      general: "외부의 소음에서 벗어나 혼자만의 시간을 가지세요. 해답은 당신 안에 있습니다.",
      love: "서두르지 말고 자기 성찰의 시간을 가지세요. 가벼운 만남보다 깊은 의미를 찾게 됩니다.",
      wealth: "경제적인 활동보다는 계획을 점검하고 지식을 쌓는 것이 유리한 시기입니다.",
      past: "혼자만의 고독 속에서 진실을 탐구하며 내적인 성장을 이루었습니다.",
      present: "깊은 생각에 잠겨 인생의 진정한 의미를 찾고 있습니다.",
      future: "마침내 깨달음을 얻고 지혜로운 길잡이가 되어 앞길을 비출 것입니다."
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    meaning: "Good luck, karma, life cycles, destiny, a turning point.",
    interpretations: {
      general: "운명의 수레바퀴가 돌고 있습니다. 큰 변화가 찾아오고 있으며 이는 당신에게 기회입니다.",
      love: "운명적인 만남이 있을 수 있습니다. 갑작스러운 관계의 진전이 예상됩니다.",
      wealth: "재물운의 흐름이 반전됩니다. 예상치 못한 수입이나 기쁜 소식이 있을 수 있습니다.",
      past: "인생의 큰 전환점을 지나며 많은 교훈을 얻었습니다.",
      present: "변화의 파도를 타고 있으며, 곧 긍정적인 방향으로 나아갈 것입니다.",
      future: "행운이 당신을 따르며 모든 일이 순조롭게 풀리기 시작할 것입니다."
    }
  },
  {
    id: 11,
    name: "Justice",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    meaning: "Justice, fairness, truth, cause and effect, law.",
    interpretations: {
      general: "공정하고 객관적인 판단이 필요합니다. 뿌린 대로 거둔다는 진리를 기억하세요.",
      love: "감정보다 이성이 중요한 시기입니다. 균형 잡힌 관계를 유지하도록 노력하세요.",
      wealth: "정직한 이득을 추구해야 합니다. 법적인 문제나 계약에서 명확함이 요구됩니다.",
      past: "당신의 공정한 행동이 현재의 인과응보를 만들었습니다.",
      present: "옳고 그름을 가리고 균형을 잡아야 하는 결단의 순간에 있습니다.",
      future: "가장 공정한 결과가 도출되어 억울함이 풀리게 될 것입니다."
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    meaning: "Pause, surrender, letting go, new perspectives.",
    interpretations: {
      general: "새로운 시각으로 세상을 보세요. 잠시 멈추는 것이 더 큰 전진을 위한 희생일 수 있습니다.",
      love: "관계를 위해 한 발 양보하는 미덕이 필요합니다. 때를 기다리는 인내가 중요합니다.",
      wealth: "돈에 대한 집착을 버리고 사고를 전환해보세요. 무리한 투자는 피해야 합니다.",
      past: "희망을 위해 기꺼이 자신을 희생하고 참아냈던 경험이 있습니다.",
      present: "현재는 정체된 것처럼 보이지만, 내적으로는 큰 변화를 준비 중입니다.",
      future: "세상을 보는 눈이 달라지며 고통 끝에 새로운 희망을 보게 될 것입니다."
    }
  },
  {
    id: 13,
    name: "Death",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    meaning: "Endings, change, transformation, transition.",
    interpretations: {
      general: "과거의 낡은 것을 보내줘야 새로운 것이 옵니다. 단절은 곧 새로운 삶의 시작입니다.",
      love: "끝난 관계를 붙잡지 마세요. 새로운 인연을 만나기 위한 필연적인 과정입니다.",
      wealth: "지출을 과감히 정리하거나 실패를 인정하고 새롭게 시작할 때입니다.",
      past: "당신 인생에서 큰 한 단락이 마무리되고 변모했던 시기가 있었습니다.",
      present: "급격한 변화를 겪고 있으며, 이는 더 나은 미래를 위한 정화입니다.",
      future: "과거의 굴레를 완전히 벗어던지고 완전히 새로운 삶으로 거듭날 것입니다."
    }
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    meaning: "Balance, moderation, patience, purpose.",
    interpretations: {
      general: "중용과 조화가 핵심입니다. 감정과 이성을 잘 섞어 최상의 결과를 만들어내세요.",
      love: "편안하고 조화로운 만남이 지속됩니다. 서로를 보충해주는 안정적인 사랑입니다.",
      wealth: "수입과 지출의 균형을 맞추어야 합니다. 절제하는 태도가 부를 유지하는 비결입니다.",
      past: "절제와 조화를 통해 복잡한 상황들을 지혜롭게 극복해왔습니다.",
      present: "다양한 요소들을 잘 융합하여 평화로운 상태를 유지하고 있습니다.",
      future: "육체와 영혼이 건강해지며 완벽한 평온에 도달하게 될 것입니다."
    }
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    meaning: "Shadow self, attachment, addiction, restriction, sexuality.",
    interpretations: {
      general: "물질적인 유혹이나 집착에 주의하세요. 스스로 만든 속박을 깨뜨려야 자유로워집니다.",
      love: "강렬한 이끌림이 있을 수 있으나, 소유욕이나 집착으로 흐르지 않게 주의하세요.",
      wealth: "돈에 대한 탐욕이 화를 부를 수 있습니다. 일확천금을 노리는 도박은 금물입니다.",
      past: "그릇된 욕망이나 습관에 얽매여 힘겨웠던 시절이 있었습니다.",
      present: "유혹에 빠져 있거나 어떠한 계약이나 상황에 속박되어 있는 느낌입니다.",
      future: "어두운 자아를 직시하고 어리석은 집착에서 벗어나게 될 것입니다."
    }
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    meaning: "Sudden change, upheaval, chaos, revelation, awakening.",
    interpretations: {
      general: "갑작스러운 충격이 올 수 있지만, 이는 부실한 기초를 허물고 다시 짓기 위함입니다.",
      love: "관계에 큰 위기가 닥칠 수 있습니다. 하지만 이는 진정한 소통을 위한 폭발입니다.",
      wealth: "금전적 손실이나 예상 밖의 위기에 대비하세요. 견고하지 않은 계획은 무너집니다.",
      past: "삶의 근간이 흔들리는 큰 사건을 겪었지만 그로 인해 깨달음을 얻었습니다.",
      present: "충격적인 변화 앞에 있지만, 두려워하지 말고 진실을 직시하세요.",
      future: "무너진 자리 위에 더욱 단단하고 진실된 미래를 새로이 건설하게 될 것입니다."
    }
  },
  {
    id: 17,
    name: "The Star",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    meaning: "Hope, faith, purpose, renewal, spirituality.",
    interpretations: {
      general: "어둠 속의 빛처럼 희망이 보입니다. 당신의 꿈을 믿고 나아가세요.",
      love: "서로에게 영감을 주는 아름다운 사랑입니다. 마음의 상처가 치유되는 시기입니다.",
      wealth: "장기적인 관점에서 재물운이 밝습니다. 긍정적인 마음가짐이 풍요를 부릅니다.",
      past: "힘든 시기를 지나며 새로운 희망을 발견했던 경험이 있습니다.",
      present: "평화로운 마음으로 미래를 설계하고 꿈을 키워나가는 중입니다.",
      future: "당신이 소망하던 바가 마침내 현실이 되어 빛날 것입니다."
    }
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/RWS_Tarot_18_Moon.jpg",
    meaning: "Illusion, fear, anxiety, subconscious, intuition.",
    interpretations: {
      general: "불안과 혼란이 있을 수 있는 시기입니다. 직관을 믿되 환상속에 빠지지는 마세요.",
      love: "불확실한 관계나 오해로 힘들어질 수 있습니다. 진심을 나누는 시간이 필요합니다.",
      wealth: "투자나 계약 시 사기를 조심하세요. 겉모습에 속지 말고 실체를 잘 파악해야 합니다.",
      past: "불안과 모호함 속에서 길을 헤매며 방황했던 시기가 있었습니다.",
      present: "두려움과 혼돈 속에서도 당신의 내면은 진실을 감지하고 있습니다.",
      future: "마침내 안개가 걷히고 혼란스러운 상황의 실체가 드러나게 될 것입니다."
    }
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    meaning: "Positivity, fun, warmth, success, vitality.",
    interpretations: {
      general: "당신의 모든 일이 성공하고 밝게 빛날 것입니다. 즐거움과 활력이 넘치는 때입니다.",
      love: "사랑의 기쁨이 충만합니다. 고백을 하거나 화해를 하기에 완벽한 시기입니다.",
      wealth: "재물운이 정점에 달합니다. 보상과 성공이 따르며 돈 걱정이 사라지는 운입니다.",
      past: "행복과 성공의 열매를 따먹으며 즐겁게 지내왔던 전성기가 있었습니다.",
      present: "밝은 에너지를 받으며 하는 일마다 좋은 성과를 내고 만족스럽습니다.",
      future: "축하받을 일들이 가득하며 인생 최고의 영광을 누리게 될 것입니다."
    }
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    meaning: "Judgement, rebirth, inner calling, absolution.",
    interpretations: {
      general: "과거의 노력이 결실을 맺고 새로운 소명이 주어집니다. 부름에 응답하세요.",
      love: "재결합이나 관계의 도달을 의미합니다. 진실이 밝혀지고 오해가 해소됩니다.",
      wealth: "기다리던 소식이 들려옵니다. 합당한 금전적 대가를 받고 새 길을 가게 됩니다.",
      past: "중요한 결정을 내리고 삶의 방향을 전환했던 숙명적인 순간이 있었습니다.",
      present: "변화의 신호를 받고 인생의 다음 단계로 넘어갈 준비를 하고 있습니다.",
      future: "지난날의 업보가 보상으로 돌아오며 제2의 인생이 화려하게 펼쳐질 것입니다."
    }
  },
  {
    id: 21,
    name: "The World",
    arcana: "Major",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    meaning: "Completion, integration, accomplishment, travel.",
    interpretations: {
      general: "하나의 주기가 완성되었습니다. 성공과 성취의 기쁨을 만끽하세요.",
      love: "완벽한 조화를 이루는 관계의 결실을 맺습니다. 결혼이나 깊은 약속이 있을 수 있습니다.",
      wealth: "목표했던 재정적 성취를 이룹니다. 전반적으로 막힘없는 재물운입니다.",
      past: "수많은 과정을 거쳐 하나의 큰 프로젝트나 목표를 완수했습니다.",
      present: "모든 것이 제자리를 찾고 만족스러운 결말에 도달해 있습니다.",
      future: "더 넓은 세상으로 나아가 새로운 성공의 신화를 쓰게 될 것입니다."
    }
  }
];

export const MINOR_ARCANA: TarotCardData[] = [
  // Wands
  {
    id: 22,
    name: "Ace of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/waac.jpg",
    meaning: "Inspiration, new opportunities, growth, potential.",
    interpretations: {
      general: "새로운 영감과 에너지가 솟구칩니다. 열정을 가지고 시작하세요.",
      love: "새로운 설렘이 시작되거나 관계에 활력이 생깁니다.",
      wealth: "새로운 사업 기회나 수익 창출의 아이디어가 떠오릅니다.",
      past: "강력한 영감이 당신을 새로운 길로 이끌었던 시기였습니다.",
      present: "지금 바로 실행에 옮길 수 있는 창조적인 에너지가 충만합니다.",
      future: "곧 가슴 설레는 새로운 프로젝트나 기회가 찾아올 것입니다."
    }
  },
  {
    id: 23,
    name: "Two of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg",
    meaning: "Future planning, progress, decisions, discovery.",
    interpretations: {
      general: "더 넓은 세상을 향한 계획을 세울 때입니다. 선택의 기로에 있습니다.",
      love: "미래를 함께할 계획을 세우거나 새로운 만남을 고민합니다.",
      wealth: "확장을 위한 계획이나 해외 투자 등을 고려하기 좋습니다.",
      past: "당신은 이미 기초를 닦았고 다음 단계를 고민해왔습니다.",
      present: "현재의 위치에서 더 멀리 내다보며 결단을 내려야 하는 시점입니다.",
      future: "당신의 계획이 구체화되면서 더 넓은 세상으로 나아가게 될 것입니다."
    }
  },
  {
    id: 24,
    name: "Three of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg",
    meaning: "Expansion, foresight, overseas opportunities.",
    interpretations: {
      general: "당신의 노력이 결실을 맺기 시작합니다. 더 큰 미래를 내다보세요.",
      love: "장거리 연애나 넓은 시야를 가진 상대를 만날 수 있습니다.",
      wealth: "사업의 확장이나 장기적인 투자의 성과가 나타납니다.",
      past: "당신은 희망을 품고 배가 들어오기를 기다려왔습니다.",
      present: "전망이 밝아지고 있으며 당신의 영향력이 커지는 시기입니다.",
      future: "성공적인 확장이 이루어지고 노력의 보상을 받게 될 것입니다."
    }
  },
  {
    id: 25,
    name: "Four of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg",
    meaning: "Celebration, joy, harmony, relaxation, homecoming.",
    interpretations: {
      general: "축하할 일이 생깁니다. 평화롭고 행복한 마무리를 즐기세요.",
      love: "결혼, 약혼 등 안정적이고 행복한 관계의 진전이 있습니다.",
      wealth: "안정적인 수익이 발생하며 가정의 평화를 누립니다.",
      past: "성공적인 협력이나 축제 같은 즐거운 결실을 맺었던 경험이 있습니다.",
      present: "주변 사람들과 기쁨을 나누며 안정을 누리는 평화로운 시기입니다.",
      future: "축하해야 할 기쁜 소식이 조만간 당신의 문을 두드릴 것입니다."
    }
  },
  {
    id: 26,
    name: "Five of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg",
    meaning: "Competition, conflict, rivalry, dynamic energy.",
    interpretations: {
      general: "사소한 경쟁이나 갈등이 있을 수 있습니다. 성장을 위한 진통입니다.",
      love: "의견 충돌이 있을 수 있으나 소통을 통해 해결해 나가세요.",
      wealth: "시장의 경쟁이 치열해집니다. 당신의 역량을 보여줄 기회입니다."
    }
  },
  {
    id: 27,
    name: "Six of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg",
    meaning: "Success, public recognition, victory, confidence.",
    interpretations: {
      general: "승리와 성공이 당신과 함께합니다. 주변의 인정을 받게 됩니다.",
      love: "원하는 사랑을 쟁취하거나 연인에게 큰 신뢰를 받습니다.",
      wealth: "투자의 성공이나 승진 등 기쁜 소식이 들려옵니다."
    }
  },
  {
    id: 28,
    name: "Seven of Wands",
    arcana: "Minor",
    image: "https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg",
    meaning: "Defense, perseverance, maintaining control.",
    interpretations: {
      general: "어려운 상황에서도 당신의 자리를 지켜내야 합니다. 용기가 필요한 때입니다.",
      love: "경쟁자가 나타날 수 있으나 당신의 신념을 굽히지 마세요.",
      wealth: "재물을 지키기 위한 노력이 필요하며, 굳건히 버텨야 이득이 됩니다."
    }
  },
  {
    id: 29,
    name: "Eight of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg",
    meaning: "Speed, action, fast change, movement, travel.",
    interpretations: {
      general: "상황이 매우 빠르게 전개됩니다. 지체 없이 행동하세요.",
      love: "갑작스러운 고백이나 빠른 관계의 진전이 예상됩니다.",
      wealth: "자금 회전이 빨라지거나 급격한 변동이 생길 수 있습니다."
    }
  },
  {
    id: 30,
    name: "Nine of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Wands09.jpg",
    meaning: "Resilience, persistence, boundaries, test of faith.",
    interpretations: {
      general: "마지막 고비가 남았습니다. 포기하지 말고 끝까지 인내하세요.",
      love: "지친 관계일 수 있으나 서로를 지키려는 의지가 중요합니다.",
      wealth: "어려움을 극복하기 직전입니다. 조금만 더 신중하게 관리하세요."
    }
  },
  {
    id: 31,
    name: "Ten of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg",
    meaning: "Burden, responsibility, hard work, stress, achievement.",
    interpretations: {
      general: "너무 많은 책임감이 당신을 짓누릅니다. 가끔은 내려놓을 필요가 있습니다.",
      love: "혼자서 감당하기 힘든 짐을 지고 있습니다. 상대와 나누세요.",
      wealth: "과도한 업무나 부채 등으로 스트레스를 받을 수 있습니다."
    }
  },
  {
    id: 32,
    name: "Page of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg",
    meaning: "Enthusiasm, discovery, confidence, messenger.",
    interpretations: {
      general: "새로운 소식이나 아이디어가 찾아옵니다. 호기심을 가지고 탐구하세요.",
      love: "어린 시절 같은 순수함이나 새로운 설렘을 느킵니다.",
      wealth: "새로운 수입원이나 작은 제안이 들어올 수 있습니다."
    }
  },
  {
    id: 33,
    name: "Knight of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg",
    meaning: "Energy, passion, lust, action, adventure, impulsiveness.",
    interpretations: {
      general: "열정적으로 돌진하는 시기입니다. 다만 성급함은 주의해야 합니다.",
      love: "불타오르는 사랑을 느낍니다. 하지만 금방 식을 수 있으니 조심하세요.",
      wealth: "공격적인 투자나 적극적인 비즈니스가 수익을 낼 확률이 높습니다."
    }
  },
  {
    id: 34,
    name: "Queen of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg",
    meaning: "Confidence, independence, social butterfly, determination.",
    interpretations: {
      general: "당신은 매력적이고 유능합니다. 자신감을 가지고 상황을 리드하세요.",
      love: "매력 넘치는 연애를 합니다. 당신의 활발한 성격이 빛을 발합니다.",
      wealth: "자신의 능력을 활용해 안정적인 기반을 다집니다."
    }
  },
  {
    id: 35,
    name: "King of Wands",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
    meaning: "Natural born leader, vision, entrepreneur, honor.",
    interpretations: {
      general: "강력한 카리스마로 주변을 압도합니다. 큰 그림을 보고 결단하세요.",
      love: "주도적인 연애를 선호합니다. 상대방에게 든든한 존재가 됩니다.",
      wealth: "큰 성공을 거둡니다. 사업적으로 큰 수익을 창출할 운세입니다."
    }
  },

  // Cups
  {
    id: 36,
    name: "Ace of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    meaning: "Love, new relationships, compassion, creativity.",
    interpretations: {
      general: "감정이 넘쳐흐르는 새로운 시작입니다. 사랑과 치유가 함께합니다.",
      love: "운명적인 사랑의 시작이나 관계의 깊은 회복이 있습니다.",
      wealth: "마음이 즐거운 일로 수익을 얻거나 정신적인 풍요를 누립니다."
    }
  },
  {
    id: 37,
    name: "Two of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
    meaning: "Unified love, partnership, mutual attraction, balance.",
    interpretations: {
      general: "서로 통하는 소중한 인연을 만납니다. 화합과 계약에 길한 운입니다.",
      love: "서로의 마음이 일치하는 완벽한 사랑을 하게 됩니다.",
      wealth: "좋은 파트너를 만나 이득을 얻거나 원활한 합의가 이루어집니다."
    }
  },
  {
    id: 38,
    name: "Three of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg",
    meaning: "Celebration, friendship, creativity, collaborations.",
    interpretations: {
      general: "축하와 파티에 어울리는 운세입니다. 주변 사람들과 즐거움을 나누세요.",
      love: "친구에서 연인이 되거나 여러 사람과의 즐거운 모임이 많아집니다.",
      wealth: "협력을 통한 수익이 생기거나 즐거운 일이 재물로 연결됩니다."
    }
  },
  {
    id: 39,
    name: "Four of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg",
    meaning: "Meditation, contemplation, apathy, re-evaluation.",
    interpretations: {
      general: "지루함이나 무기력함을 느낄 수 있습니다. 새로운 제안을 놓치지 마세요.",
      love: "권태기일 수 있습니다. 이미 가진 것의 소중함을 다시 느껴보세요.",
      wealth: "기회는 오고 있으나 당신이 알아채지 못하고 있을 수 있습니다."
    }
  },
  {
    id: 40,
    name: "Five of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg",
    meaning: "Regret, failure, disappointment, pessimism.",
    interpretations: {
      general: "잃은 것에 슬퍼하기보다 남은 것에 집중하세요. 실망 뒤에 희망이 있습니다.",
      love: "이별이나 실망감이 있을 수 있으나 새로운 인연이 그 뒤에 있습니다.",
      wealth: "금전적 손실이 있을 수 있으나 완전히 끝난 것은 아닙니다."
    }
  },
  {
    id: 41,
    name: "Six of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg",
    meaning: "Revisiting the past, childhood memories, innocence, joy.",
    interpretations: {
      general: "과거의 인연이나 추억이 떠오릅니다. 순수한 마음을 회복하세요.",
      love: "옛 애인이 연락 오거나 어릴 적 감정처럼 풋풋한 사랑이 시작됩니다.",
      wealth: "오래전에 투자했던 것이나 과거의 유산 등이 도움이 됩니다."
    }
  },
  {
    id: 42,
    name: "Seven of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
    meaning: "Opportunities, choices, wishful thinking, illusion.",
    interpretations: {
      general: "너무 많은 선택지가 있어 혼란스럽습니다. 환상보다 실체를 보세요.",
      love: "많은 이성 사이에서 고민하거나 상대에 대해 환상을 품고 있을 수 있습니다.",
      wealth: "허황된 투자 계획보다는 실질적인 이득을 따져봐야 합니다."
    }
  },
  {
    id: 43,
    name: "Eight of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg",
    meaning: "Disappointment, abandonment, withdrawal, escaping.",
    interpretations: {
      general: "익숙한 곳을 떠나 새로운 답을 찾아 나섭니다. 정신적 여정이 시작됩니다.",
      love: "지친 관계를 뒤로하고 홀로 서기를 결심할 수 있습니다.",
      wealth: "기존의 수익 구조를 포기하고 새로운 도전이나 공부를 시작합니다."
    }
  },
  {
    id: 44,
    name: "Nine of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg",
    meaning: "Contentment, satisfaction, gratitude, wish come true.",
    interpretations: {
      general: "소원이 이루어지는 '위시 카드'입니다. 큰 만족감을 누리게 됩니다.",
      love: "꿈 보던 연인을 만나거나 최고의 행복을 느낍니다.",
      wealth: "바라던 금전적 성공이 찾아오며 풍요로운 생활을 합니다."
    }
  },
  {
    id: 45,
    name: "Ten of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Cups10.jpg",
    meaning: "Divine love, blissful relationships, harmony, alignment.",
    interpretations: {
      general: "가족이나 주변과의 조화가 완벽합니다. 평온과 행복이 가득합니다.",
      love: "가족들의 축복 속에 하는 사랑, 행복한 결혼 생활을 상징합니다.",
      wealth: "가정의 번영과 꾸준하고 안정적인 자산 형성이 이루어집니다."
    }
  },
  {
    id: 46,
    name: "Page of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg",
    meaning: "Creative opportunity, intuitive messages, curiosity, possibility.",
    interpretations: {
      general: "감성이 풍부한 소식을 듣게 됩니다. 직관을 따르고 마음을 여세요.",
      love: "로맨틱한 제안이나 수줍은 고백이 있을 수 있습니다.",
      wealth: "창의적인 분야에서 작은 수익 제안이나 아이디어가 나옵니다."
    }
  },
  {
    id: 47,
    name: "Knight of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg",
    meaning: "Creativity, romance, charm, imagination, beauty.",
    interpretations: {
      general: "백마 탄 왕자처럼 기분 좋은 제안이나 인연이 찾아옵니다. 낭만적인 흐름입니다.",
      love: "다정한 연인이나 고백해올 사람이 나타납니다. 감성적인 데이트가 좋습니다.",
      wealth: "좋은 소식이나 품위 있는 제안이 당신의 재물을 늘려줍니다."
    }
  },
  {
    id: 48,
    name: "Queen of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg",
    meaning: "Compassion, calm, comfort, nursing, empathy.",
    interpretations: {
      general: "따뜻하고 자애로운 에너지가 가득합니다. 주변의 아픔을 공감하고 치유하세요.",
      love: "깊고 헌신적인 사랑을 합니다. 상대방의 내면을 잘 돌보아 줍니다.",
      wealth: "직관에 따른 투자가 성과를 내며, 부드러운 방식으로 금전을 모읍니다."
    }
  },
  {
    id: 49,
    name: "King of Cups",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg",
    meaning: "Emotional balance, control, generosity, wisdom.",
    interpretations: {
      general: "감정을 다스릴 줄 아는 지혜로운 사람입니다. 포용력 있게 상황을 대처하세요.",
      love: "안정적이고 성숙한 연애를 합니다. 큰 그릇 같은 사랑입니다.",
      wealth: "차분하고 안정적인 자금 관리가 돋보이며 주변의 신뢰를 얻습니다."
    }
  },

  // Swords
  {
    id: 50,
    name: "Ace of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    meaning: "Breakthrough, clarity, sharp mind, success.",
    interpretations: {
      general: "새로운 생각과 명확한 결단이 필요한 때입니다. 진실이 드러납니다.",
      love: "냉철한 판단이 필요한 관계입니다. 오해를 풀고 확실히 정립하세요.",
      wealth: "획기적인 아이디어나 승소, 유리한 계약 등의 운세입니다."
    }
  },
  {
    id: 51,
    name: "Two of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg",
    meaning: "Difficult choices, stalemate, avoidance, blockage.",
    interpretations: {
      general: "결정을 내리지 못해 교착 상태에 빠집니다. 눈을 가리지 말고 직시하세요.",
      love: "마음의 문을 닫고 있거나 관계에서 결단을 미루고 있습니다.",
      wealth: "수익과 비용 사이에서 고민하며 투자를 망설이는 시기입니다."
    }
  },
  {
    id: 52,
    name: "Three of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg",
    meaning: "Heartbreak, emotional pain, sorrow, grief, hurt.",
    interpretations: {
      general: "마음 아픈 소식이나 상처가 있을 수 있습니다. 슬픔을 충분히 겪어야 치유됩니다.",
      love: "배신, 삼각관계 등 아픈 이별이나 다툼이 예상됩니다.",
      wealth: "예상치 못한 손실이나 계약 파기 등으로 상심할 수 있습니다."
    }
  },
  {
    id: 53,
    name: "Four of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg",
    meaning: "Rest, relaxation, meditation, recovery.",
    interpretations: {
      general: "잠시 휴식이 필요합니다. 소란을 뒤로하고 에너지를 충전하세요.",
      love: "잠시 관계의 거리를 두거나 생각할 시간을 갖는 것이 좋습니다.",
      wealth: "활동을 무리하게 확장하기보다 현재 상태를 유지하며 쉬어야 합니다."
    }
  },
  {
    id: 54,
    name: "Five of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg",
    meaning: "Conflict, disagreement, competition, defeat, win at all costs.",
    interpretations: {
      general: "이겨도 상처뿐인 승리일 수 있습니다. 갈등 상황에서 비겁해지지 마세요.",
      love: "심한 말다툼이나 자존심 싸움으로 서로에게 깊은 상처를 줍니다.",
      wealth: "부당한 이익을 취하면 나중에 큰 화가 됩니다. 정당하게 다투세요."
    }
  },
  {
    id: 55,
    name: "Six of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg",
    meaning: "Transition, change, passage, rite of passage, release.",
    interpretations: {
      general: "힘든 상황을 뒤로하고 더 나은 곳으로 이동합니다. 슬픔이 가라앉는 과정입니다.",
      love: "갈등을 뒤로하고 차분한 상태로 나옵니다. 여행이나 이사가 도움이 됩니다.",
      wealth: "빚을 정리하거나 손실이 줄어들며 점진적으로 회복됩니다."
    }
  },
  {
    id: 56,
    name: "Seven of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg",
    meaning: "Betrayal, deception, getting away with something, stealth.",
    interpretations: {
      general: "속임수나 비겁한 행동에 주의하세요. 정직한 방법이 결국 승리합니다.",
      love: "상대가 무언가 숨기고 있을 수 있으니 경계가 필요합니다.",
      wealth: "도난이나 사기를 조심해야 하며, 꼼수로 얻은 재물은 곧 사라집니다."
    }
  },
  {
    id: 57,
    name: "Eight of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg",
    meaning: "Imprisonment, entrapment, victim mentality.",
    interpretations: {
      general: "스스로 만든 생각의 감옥에 갇혀 있습니다. 마음만 먹으면 벗어날 수 있습니다.",
      love: "답답한 관계에 묶여 힘들어하지만 해결책은 당신 안에 있습니다.",
      wealth: "금전적 제약이 많아 보이나 사고를 전환하면 돌파구가 보입니다."
    }
  },
  {
    id: 58,
    name: "Nine of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg",
    meaning: "Anxiety, nightmare, fear, depression, trauma.",
    interpretations: {
      general: "걱정과 불안으로 밤잠을 설칠 수 있습니다. 실체 없는 공포에서 벗어나세요.",
      love: "상대를 믿지 못하거나 관계에 대한 과한 걱정으로 자책합니다.",
      wealth: "재정적 불안감이 심하지만 실제 상황은 생각보다 나쁘지 않을 수 있습니다."
    }
  },
  {
    id: 59,
    name: "Ten of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg",
    meaning: "Betrayal, failure, backstabbing, hitting rock bottom.",
    interpretations: {
      general: "최악의 상황이지만 이제 올라갈 일만 남았습니다. 고통의 끝입니다.",
      love: "완전한 이별이나 배신으로 인한 끝을 의미합니다. 다시 시작할 준비를 하세요.",
      wealth: "큰 실패나 파산 등 힘든 일이 있을 수 있으나 새로운 기틀을 닦는 전환점입니다."
    }
  },
  {
    id: 60,
    name: "Page of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg",
    meaning: "Curiosity, restlessness, mental agility, communication.",
    interpretations: {
      general: "민첩하고 지적인 호기심이 발동합니다. 정보를 수집하고 경계심을 늦추지 마세요.",
      love: "미숙하지만 솔직한 대화를 하거나 상대를 염탐하는 감정을 품습니다.",
      wealth: "새로운 정보나 소문에 민감하게 반응하여 작은 실속을 챙깁니다."
    }
  },
  {
    id: 61,
    name: "Knight of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg",
    meaning: "Action, speed, ambition, driven, intelligence.",
    interpretations: {
      general: "목표를 향해 거침없이 돌진합니다. 날카로운 비판이나 충고를 들을 수 있습니다.",
      love: "급작스럽게 다가오는 인연이나 단호하게 자신의 생각을 밀어붙이는 시기입니다.",
      wealth: "과감한 투자를 하거나 경쟁자와 치열하게 다투어 이득을 쟁취합니다."
    }
  },
  {
    id: 62,
    name: "Queen of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Swords13.jpg",
    meaning: "Complexity, independence, perceptions, clear boundaries.",
    interpretations: {
      general: "냉철한 이성과 예리한 통찰력을 발휘하세요. 공과 사를 명확히 해야 합니다.",
      love: "혼자만의 시간을 소중히 여기거나 감정보다 이성이 앞서는 연애를 합니다.",
      wealth: "객관적인 지표를 바탕으로 한 관리가 철저하며 손해 없는 협상을 합니다."
    }
  },
  {
    id: 63,
    name: "King of Swords",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg",
    meaning: "Intellect, authority, truth, ethics, structure.",
    interpretations: {
      general: "지적 권위와 도덕적 엄격함을 갖추어야 합니다. 법적인 문제나 정의가 중요해집니다.",
      love: "냉정한 판단으로 상대에게 조언하거나 감정 표현이 인색한 성숙한 관계입니다.",
      wealth: "확실한 원칙 아래 자산을 운용하며 합법적이고 공정한 이익을 추구합니다."
    }
  },

  // Pentacles
  {
    id: 64,
    name: "Ace of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Penta01.jpg",
    meaning: "New financial opportunity, manifestation, abundance.",
    interpretations: {
      general: "실질적이고 물질적인 새로운 시작입니다. 큰 행운과 재물운이 따릅니다.",
      love: "안정적인 만남이 시작되거나 연인에게 고가의 선물을 받을 수 있습니다.",
      wealth: "생각지 못한 수입이나 확실한 투자 기회, 사업의 성공적 시작을 의미합니다."
    }
  },
  {
    id: 65,
    name: "Two of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Penta02.jpg",
    meaning: "Balance, adaptability, time management, priorities.",
    interpretations: {
      general: "여러 일을 동시에 처리하며 균형을 잡습니다. 변화에 유연하게 대처하세요.",
      love: "두 사람 사이에서 고민하거나 연애와 일 사이를 조절하느라 바쁩니다.",
      wealth: "돌려막기 식의 자금 운용이 될 수 있으나 균형만 잘 잡으면 위기를 넘깁니다."
    }
  },
  {
    id: 66,
    name: "Three of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Penta03.jpg",
    meaning: "Teamwork, collaboration, learning, implementation.",
    interpretations: {
      general: "협력을 통해 숙련된 기술을 발휘합니다. 주변의 인정을 받는 전문가의 운입니다.",
      love: "공통의 목표를 가진 커플이거나 조화로운 노력을 통해 관계가 견고해집니다.",
      wealth: "성실한 업무 성과로 보상을 받거나 전문가의 도움으로 재물을 불립니다."
    }
  },
  {
    id: 67,
    name: "Four of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Penta04.jpg",
    meaning: "Conservation, security, frugality, pointer-events-none.",
    interpretations: {
      general: "가진 것을 지키는 데 집중합니다. 인색함이나 변화에 대한 두려움을 경계하세요.",
      love: "상대를 소유하려 들거나 너무 방어적인 태도로 관계의 발전을 막습니다.",
      wealth: "절약과 저축에는 좋으나 지나친 집착이나 고집은 오히려 독이 될 수 있습니다."
    }
  },
  {
    id: 68,
    name: "Five of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Penta05.jpg",
    meaning: "Financial loss, hardship, isolation, poverty.",
    interpretations: {
      general: "물질적, 정신적 빈곤을 느낄 수 있는 힘든 시기입니다. 주변의 도움을 거절하지 마세요.",
      love: "힘든 시기를 함께 견디는 사랑이거나 마음의 문을 닫고 고립감을 느낍니다.",
      wealth: "금전적 손실이 크거나 경제적 어려움에 직면하니 철저한 관리가 필요합니다."
    }
  },
  {
    id: 69,
    name: "Six of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Penta06.jpg",
    meaning: "Generosity, charity, sharing wealth, gratitude.",
    interpretations: {
      general: "베풂과 나눔의 즐거움이 있습니다. 도움을 주고받으며 조화를 이루는 운세입니다.",
      love: "상대에게 아낌없이 주거나 적절한 보상을 받는 균형 잡힌 연애를 합니다.",
      wealth: "여유 자금이 생기거나 도움의 손길을 받아 재정 상황이 원활해집니다."
    }
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Penta07.jpg",
    meaning: "Patience, reward, investment, long-term view.",
    interpretations: {
      general: "지난 노력을 돌아보며 결실을 기다립니다. 서두르지 말고 성장을 지켜보세요.",
      love: "우리 관계에 대한 진지한 고민이나 앞으로의 방향성을 모색하는 시기입니다.",
      wealth: "투자의 성과를 기다리거나 사업의 진행 속도를 점검하며 앞날을 계획합니다."
    }
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Penta08.jpg",
    meaning: "Apprenticeship, dedication, skill development, mastery.",
    interpretations: {
      general: "성실하게 한 우물을 파야 할 때입니다. 기술 연마와 꾸준함이 성공을 가져옵니다.",
      love: "관계를 위해 꾸준히 노력하고 배려하는 모습이 아름다운 시기입니다.",
      wealth: "자신의 능력을 발휘한 정직한 노동의 대가를 받으며 자산을 축적합니다."
    }
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Penta09.jpg",
    meaning: "Gratitude, luxury, self-sufficiency, culmination.",
    interpretations: {
      general: "물질적 여유와 기품 있는 생활을 누립니다. 스스로 일구어낸 성공에 보람을 느낍니다.",
      love: "혼자여도 당당하고 매력적이며, 품격 있는 데이트를 즐기게 됩니다.",
      wealth: "풍요로운 재물을 소유하게 되며 경제적인 독립과 안정을 얻습니다."
    }
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Penta10.jpg",
    meaning: "Wealth, inheritance, family, establishment, tradition.",
    interpretations: {
      general: "완벽한 풍요와 세대 간의 조화를 상징합니다. 안정적인 기반 위에 삶을 구축하세요.",
      love: "가족 같은 편안함과 든든함이 있는 만남, 축복받는 관계가 지속됩니다.",
      wealth: "큰 재산을 물려받거나 대규모 투자 성공 등 가문의 번영에 필적하는 운입니다."
    }
  },
  {
    id: 74,
    name: "Page of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Penta11.jpg",
    meaning: "Manifestation, financial opportunity, skill development.",
    interpretations: {
      general: "학구적이고 성실한 자세로 새로운 공부나 사업을 시작합니다. 현실적인 소식이 들려옵니다.",
      love: "풋풋하고 성실한 연애를 시작하거나 상대에 대한 정보를 신중히 파악합니다.",
      wealth: "금전적 이득을 줄 수 있는 자격증 취득이나 작은 수입원이 생깁니다."
    }
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Penta12.jpg",
    meaning: "Hard work, productivity, routine, conservatism.",
    interpretations: {
      general: "다소 느리지만 가장 확실한 길로 나아갑니다. 성실함과 인내가 최고의 무기입니다.",
      love: "변함없이 우직하게 한 사람만을 바라보는 사랑을 합니다. 믿음직스러운 관계입니다.",
      wealth: "꾸준하고 성실한 자금 관리가 돋보이며 티끌 모아 태산을 이루는 운입니다."
    }
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Penta13.jpg",
    meaning: "Nurturing, practical, providing, financial security.",
    interpretations: {
      general: "현실적이고 모성애 있는 따뜻함으로 주변을 돌봅니다. 내조와 관리의 정점입니다.",
      love: "안락하고 보살핌이 돋보이는 연애를 합니다. 정서적, 물질적 안정을 줍니다.",
      wealth: "현명한 안목으로 가정을 꾸리며 실속 있고 풍요로운 재정을 유지합니다."
    }
  },
  {
    id: 77,
    name: "King of Pentacles",
    arcana: "Minor",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Penta14.jpg",
    meaning: "Wealth, business acumen, leadership, security, abundance.",
    interpretations: {
      general: "자수성가한 부자의 기운이 있습니다. 철저한 현실 감각으로 큰 성공을 일굽니다.",
      love: "능력 있고 믿음직한 상대를 만나 안정적인 미래를 약속하는 시기입니다.",
      wealth: "최고의 재물운입니다. 사업의 번창과 자산 가격의 안정적 상승 등 부를 축적합니다."
    }
  }
];


export const ALL_CARDS: TarotCardData[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];

export const getTarotImageById = (id: number): string => {
  if (id <= 21) {
    // Major Arcana
    const num = id < 10 ? `0${id}` : id;
    return `https://www.sacred-texts.com/tarot/pkt/img/ar${num}.jpg`;
  }

  // Minor Arcana
  let prefix = "";
  let suitId = 0;

  if (id >= 22 && id <= 35) { prefix = "wa"; suitId = id - 22; }
  else if (id >= 36 && id <= 49) { prefix = "cu"; suitId = id - 36; }
  else if (id >= 50 && id <= 63) { prefix = "sw"; suitId = id - 50; }
  else if (id >= 64 && id <= 77) { prefix = "pe"; suitId = id - 64; }

  const court = ["ac", "02", "03", "04", "05", "06", "07", "08", "09", "10", "pa", "kn", "qu", "ki"];
  return `https://www.sacred-texts.com/tarot/pkt/img/${prefix}${court[suitId]}.jpg`;
};
