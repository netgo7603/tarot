
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
