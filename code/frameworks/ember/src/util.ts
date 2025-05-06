import { dirname, join } from 'node:path';

import { up as findUpSync } from 'empathic/find';

export const findDistFile = (cwd: string, relativePath: string) => {
  const nearestPackageJson = findUpSync('package.json', { cwd });
  if (!nearestPackageJson) {
    throw new Error(`Could not find package.json in: ${cwd}`);
  }
  const packageDir = dirname(nearestPackageJson);

  return join(packageDir, 'dist', relativePath);
};
