import VaultHunter from '@components/VaultHunter';

import skills from './skills.js';

export default function Operative ({ path }) {
  return (
    <VaultHunter
      name='Zane'
      discipline='Operative'
      skills={skills}
      path={path}
    />
  );
}
