
export enum FlightPhase {
  GATE = 'GATE',
  DESTINATION = 'DESTINATION',
  OBJECTIVES = 'OBJECTIVES',
  CHECK_TOOLS = 'CHECK_TOOLS',
  CONCEPTS = 'CONCEPTS',
  GROUP_ACTIVITY = 'GROUP_ACTIVITY',
  PAIR_ACTIVITY = 'PAIR_ACTIVITY',
  INDIVIDUAL_ACTIVITY = 'INDIVIDUAL_ACTIVITY',
  LANDING = 'LANDING',
  FAREWELL = 'FAREWELL'
}

export interface QuizQuestion {
  question: string;
  answer: string;
  isCorrect?: boolean;
}

export interface PassportState {
  stamps: string[];
  points: number;
  rank: string;
}
