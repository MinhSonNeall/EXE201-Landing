// ── TONER SHIFT ──────────────────────────────────────────────────────────
// The signature concept of POTWH: the world's color tone shifts with the
// difficulty of the hunt. Each level here drives a full palette that we push
// into CSS custom properties, recoloring the entire page live.

export const DIFFICULTIES = [
  {
    id: 'whisper',
    label: 'Whisper',
    tagline: 'A quiet wood. The hunt has not yet begun.',
    description:
      'Gentle forests bathed in dawn light. Learn the bow, the blade, and the rhythm of the wild before the dark closes in.',
    accent: '#34d399',     // emerald
    accentSoft: '#6ee7b7',
    glow: 'rgba(52, 211, 153, 0.45)',
    bg: '#07140f',
    bgAlt: '#0a1a14',
    enemies: 'Stray wolves · Lost spirits',
  },
  {
    id: 'pursuit',
    label: 'Pursuit',
    tagline: 'The forest holds its breath.',
    description:
      'Twilight bleeds violet through the trees. Faster foes, sharper traps, and the first whispers of the Wild Hunt on your trail.',
    accent: '#a855f7',     // violet
    accentSoft: '#c084fc',
    glow: 'rgba(168, 85, 247, 0.45)',
    bg: '#100a1c',
    bgAlt: '#160d28',
    enemies: 'Hunt-hounds · Thornwraiths',
  },
  {
    id: 'wildhunt',
    label: 'Wild Hunt',
    tagline: 'You are no longer the prey.',
    description:
      'The sky burns crimson. The princess turns and hunts the hunters. Ruthless bosses, no second chances — only the chase.',
    accent: '#f43f5e',     // crimson
    accentSoft: '#fb7185',
    glow: 'rgba(244, 63, 94, 0.5)',
    bg: '#160808',
    bgAlt: '#220b0b',
    enemies: 'The Antlered King · Riders of the Dusk',
  },
]

// Core gameplay mechanics shown in the Features section.
export const FEATURES = [
  {
    icon: '💨',
    title: 'Dashing',
    text: 'Burst across the battlefield in an instant — close the gap on a fleeing foe or dodge straight through an attack.',
  },
  {
    icon: '⚔️',
    title: 'Combo Attacks',
    text: 'Chain blade strikes into fluid, escalating combos. Time your hits to keep the pressure on and never let up.',
  },
  {
    icon: '🦅',
    title: 'Double Jump',
    text: 'Leap, then leap again mid-air to scale ruins, clear deadly gaps, and rain down on enemies from above.',
  },
  {
    icon: '💚',
    title: 'Healing',
    text: 'Mend your wounds on the move with limited charges — every heal is a choice between safety and momentum.',
  },
  {
    icon: '🎒',
    title: 'Inventory',
    text: 'Collect, carry, and equip relics, consumables, and gear to shape the princess to your own playstyle.',
  },
  {
    icon: '👑',
    title: 'Unlockable Skills',
    text: 'Grow from runaway princess to apex hunter — unlock new abilities and power-ups as you push deeper into the hunt.',
  },
]
