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

export function getProjectedOptions(initialOptions, selectedOptions) {
  if (!Object.keys(initialOptions).length) {
    return null;
  }

  return {
    ...initialOptions,
    ...selectedOptions,
  };
}
