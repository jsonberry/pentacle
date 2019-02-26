import { PostCost, PostDifficulty, PostFormat } from '@pentacle/models';

export function getInitialFormats() {
  return {
    read: [false],
    watch: [false],
    listen: [false],
  };
}

export function getInitialTopics(tags) {
  return tags.reduce((acc, tag) => ({ ...acc, [tag.id]: [false] }), {});
}

export function getInitialOptions(options) {
  return options.reduce(
    (acc, option) => ({ ...acc, [option.id]: [false] }),
    {},
  );
}

export function getSelectedOptions(queryParam) {
  if (typeof queryParam !== 'string') {
    return {};
  }

  return queryParam
    .split(',')
    .reduce((acc, option) => ({ ...acc, [option]: [true] }), {});
}

export function getProjectedOptions<T extends string>(
  initialOptions,
  selectedOptions,
): Record<T, [boolean]> {
  if (!Object.keys(initialOptions).length) {
    return null;
  }

  return {
    ...initialOptions,
    ...selectedOptions,
  };
}

export function mapFilterFormListToDictionary(list: any[]) {
  return list.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
}

export const availableBestOf = [{ id: 'bestOf', title: 'Best of' }];

export const availableCosts: { id: PostCost; title: string }[] = [
  { id: 'free', title: 'Free' },
  { id: 'paid', title: 'Paid' },
];

export const availableDifficulties: {
  id: PostDifficulty;
  title: string;
  rank: number;
}[] = [
  {
    id: 'introductory',
    title: 'Introductory',
    rank: 0,
  },
  {
    id: 'beginner',
    title: 'Beginner',
    rank: 1,
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    rank: 2,
  },
  {
    id: 'advanced',
    title: 'Advanced',
    rank: 3,
  },
];

export const availableFormats: { id: PostFormat; title: string }[] = [
  {
    id: 'read',
    title: 'Read',
  },
  { id: 'watch', title: 'Watch' },
  { id: 'listen', title: 'Listen' },
];
