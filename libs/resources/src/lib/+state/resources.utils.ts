import {
  PostCost,
  PostDifficulty,
  PostFormat,
  TopicsOperator,
} from '@pentacle/models';

export const difficultyTooltips = {
  introductory: {
    id: 'introductory',
    title: 'Introductory',
    content:
      "You're brand new to this topic, you want to see what it's all about.",
  },
  beginner: {
    id: 'beginner',
    title: 'Beginner',
    content:
      "You have an idea of what this is about, but you're still at the very beginning of your working knowledge.",
  },
  intermediate: {
    id: 'intermediate',
    title: 'Intermediate',
    content:
      "You're able to adapt and apply the basic knowledge to solve new challenges, and you're ready to learn more.",
  },
  advanced: {
    id: 'advanced',
    title: 'Advanced',
    content:
      "You're well beyond the basics, you've worked with this enough to have solved some difficult challenges, and you're ready for advancedconcepts.",
  },
};

export function filterByBestOf(
  queryBestOf: string,
  postBestOf: boolean,
): boolean {
  return !queryBestOf || postBestOf;
}

export function filterByCost(costs: string, cost: PostCost): boolean {
  return !costs || costs.includes(cost);
}

export function filterByDifficulties(
  difficulties: string,
  difficulty: PostDifficulty,
): boolean {
  return !difficulties || difficulties.includes(difficulty);
}

export function filterByFormats(formats: string, format: PostFormat): boolean {
  return !formats || formats.includes(format);
}

export function filterByTopics(
  topics: string,
  tags: string[],
  topicsOperator: TopicsOperator,
): boolean {
  if (!topics) {
    return true;
  }

  return topicsOperator === 'inclusive'
    ? tags.some(tag => topics.includes(tag))
    : topics.split(',').every(topic => tags.includes(topic));
}
