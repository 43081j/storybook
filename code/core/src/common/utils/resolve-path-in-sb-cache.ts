import { join } from 'node:path';

import { cache as findCacheDirectory } from 'empathic/package';

/**
 * Get the path of the file or directory with input name inside the Storybook cache directory:
 *
 * - `node_modules/.cache/storybook/{directoryName}` in a Node.js project or npm package
 * - `.cache/storybook/{directoryName}` otherwise
 *
 * @param fileOrDirectoryName {string} Name of the file or directory
 * @returns {string} Absolute path to the file or directory
 */
export function resolvePathInStorybookCache(fileOrDirectoryName: string, sub = 'default'): string {
  let cacheDirectory = findCacheDirectory('storybook');
  cacheDirectory ||= join(process.cwd(), 'node_modules', '.cache', 'storybook');

  return join(cacheDirectory, sub, fileOrDirectoryName);
}
