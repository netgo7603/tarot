
export enum ReadingType {
  DAILY = 'DAILY',
  PAST_PRESENT_FUTURE = 'PPF',
  LOVE = 'LOVE',
  WEALTH = 'WEALTH',
  OVERALL = 'OVERALL'
}

export interface TarotCardData {
  id: number;
  name: string;
  arcana: 'Major' | 'Minor';
  image: string;
  meaning: string;
  interpretations: {
    general: string;
    love: string;
    wealth: string;
    past?: string;
    present?: string;
    future?: string;
  };
}

export interface SelectedCard extends TarotCardData {
  position?: 'Past' | 'Present' | 'Future' | 'Current';
}

export interface ReadingRecord {
  id: string;
  timestamp: number;
  type: ReadingType;
  cards: SelectedCard[];
}

export type Step = 'HOME' | 'SELECTION' | 'RESULT' | 'HISTORY';
