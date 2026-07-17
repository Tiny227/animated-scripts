import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = '/home/agent-lead-engineer/stride-and-soul/public';

const images = [
  { dir: '', name: 'brand_moodboard.png' },
  { dir: '', name: 'color_palette_moodboard.png' },
  { dir: '', name: 'logo_concept_01.png' },
  { dir: '', name: 'logo_concept_02.png' },
  { dir: 'assets/transparency', name: 'badge_lwg_calfskin.png' },
  { dir: 'assets/transparency', name: 'badge_recycled_rubber.png' },
  { dir: 'assets/transparency', name: 'badge_spanish_suede.png' },
  { dir: 'assets/transparency', name: 'icon_blake_rapid.png' },
  { dir: 'assets/transparency', name: 'icon_blake_stitch.png' },
  { dir: 'assets/transparency', name: 'icon_goodyear_welt.png' },
  { dir: 'assets/transparency', name: 'manufacturing_map.png' }
];

async function optimize() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img.dir, img.name);
    const outputPath = path.join(publicDir, img.dir, img.name.replace('.png', '.webp'));
    
    console.log(`Optimizing ${path.join(img.dir, img.name)}...`);
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    console.log(`Finished ${img.name}: ${inputStats.size} -> ${outputStats.size} bytes (${Math.round((1 - outputStats.size / inputStats.size) * 100)}% reduction)`);
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
