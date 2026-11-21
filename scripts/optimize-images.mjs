/**
 * Compress source photos into public/media/portraits.
 * Source folder: C:\Users\User\Pictures\My photo
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const photoDir = String.raw`C:\Users\User\Pictures\My photo`;
const outDir = path.resolve('public/media/portraits');

await mkdir(outDir, { recursive: true });

const heroSrc = path.join(photoDir, 'IMG_1519.JPG');

const jobs = [
  {
    src: heroSrc,
    outs: [
      { file: 'hero.jpg', width: 1920, quality: 78 },
      { file: 'hero.webp', width: 1920, quality: 75, webp: true },
      { file: 'og.jpg', width: 1200, height: 630, quality: 80, fit: 'cover', position: 'centre' },
    ],
  },
  {
    src: path.join(photoDir, 'NSP02069.jpg'),
    outs: [
      { file: 'about.jpg', width: 900, quality: 82 },
      { file: 'about.webp', width: 900, quality: 80, webp: true },
    ],
  },
  {
    src: path.join(photoDir, 'NSP02135.jpg'),
    outs: [
      { file: 'experience.jpg', width: 1920, quality: 80 },
      { file: 'experience.webp', width: 1920, quality: 78, webp: true },
    ],
  },
  {
    src: path.join(photoDir, 'profile pic.jpg'),
    outs: [
      { file: 'avatar.jpg', width: 256, quality: 85 },
      { file: 'avatar.webp', width: 256, quality: 82, webp: true },
    ],
  },
  {
    src: path.join(photoDir, 'NSP02156.jpg'),
    outs: [
      { file: 'education.jpg', width: 1200, quality: 78 },
      { file: 'education.webp', width: 1200, quality: 75, webp: true },
    ],
  },
];

for (const job of jobs) {
  for (const out of job.outs) {
    const dest = path.join(outDir, out.file);
    let pipeline = sharp(job.src).rotate();

    if (out.height) {
      pipeline = pipeline.resize(out.width, out.height, {
        fit: out.fit || 'cover',
        position: out.position || 'centre',
      });
    } else {
      pipeline = pipeline.resize(out.width, undefined, {
        withoutEnlargement: true,
      });
    }

    if (out.webp) {
      await pipeline.webp({ quality: out.quality }).toFile(dest);
    } else {
      await pipeline.jpeg({ quality: out.quality, mozjpeg: true }).toFile(dest);
    }
    console.log('Wrote', path.join('public/media/portraits', out.file));
  }
}

await sharp(path.join(photoDir, 'profile pic.jpg'))
  .resize(64, 64, { fit: 'cover' })
  .png()
  .toFile(path.resolve('public/favicon.png'));
console.log('Wrote public/favicon.png');
