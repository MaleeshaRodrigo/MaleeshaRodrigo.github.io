/** Central public media paths — single source of truth for UI assets. */

const portraits = '/media/portraits';
const projects = '/media/projects';
const documents = '/media/documents';

export const assets = {
  portraits: {
    hero: {
      webp: `${portraits}/hero.webp`,
      jpg: `${portraits}/hero.jpg`,
      alt: 'Maleesha Achintha in professional attire',
    },
    about: {
      webp: `${portraits}/about.webp`,
      jpg: `${portraits}/about.jpg`,
      alt: 'Maleesha Achintha in graduation attire with University of Westminster diploma',
    },
    education: {
      webp: `${portraits}/education.webp`,
      jpg: `${portraits}/education.jpg`,
      alt: 'Maleesha Achintha in graduation attire celebrating with diploma',
    },
    experience: {
      webp: `${portraits}/experience.webp`,
      jpg: `${portraits}/experience.jpg`,
      alt: 'Graduation attire with University of Westminster and IIT diploma',
    },
    /** Social preview crop derived from hero. */
    og: `${portraits}/og.jpg`,
    avatar: {
      webp: `${portraits}/avatar.webp`,
      jpg: `${portraits}/avatar.jpg`,
    },
  },
  projects: {
    laserApp: Array.from(
      { length: 9 },
      (_, i) => `${projects}/laser-app/${String(i + 1).padStart(2, '0')}.png`,
    ),
    technicianPortal: Array.from(
      { length: 5 },
      (_, i) => `${projects}/technician-portal/${String(i + 1).padStart(2, '0')}.png`,
    ),
  },
  documents: {
    cv: `${documents}/cv.pdf`,
  },
} as const;
