const parseEnum = <T extends Record<string, string>>(enumObj: T, value?: string) => {
  if (!value) return undefined;

  const normalized = value.toUpperCase();

  return (enumObj as any)[normalized] ?? undefined;
}

export default parseEnum;
