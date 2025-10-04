import landingContent from '@/content/i18n/en/landing.json';

export type LandingContent = typeof landingContent;

/**
 * Load the landing page i18n content for the specified locale.
 * Currently supports only 'en'. Future: extend for multi-locale.
 */
export function getLandingContent(locale: string = 'en'): LandingContent {
  if (locale !== 'en') {
    throw new Error(`Unsupported locale: ${locale}. Only 'en' is available.`);
  }
  return landingContent;
}

/**
 * Type-safe accessor for nested i18n keys.
 * Example: getKey(content, 'hero.mission')
 */
export function getKey<T>(obj: T, path: string): string {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      throw new Error(`i18n key not found: ${path}`);
    }
  }
  if (typeof result !== 'string') {
    throw new Error(`i18n key is not a string: ${path}`);
  }
  return result;
}
