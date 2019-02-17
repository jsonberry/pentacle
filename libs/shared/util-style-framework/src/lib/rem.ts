export const baseline = 24;

export function rem(...args: number[]): string {
  return args.map(arg => `${arg / baseline}rem`).join(' ');
}
