import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { URL } from 'url';

const BASE = '/Users/arjun/Desktop/new web/public';

// All 111 asset URLs extracted live from halo-lab.com via Chrome MCP
const ALL_URLS = [
  // Icons & SVGs
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/69301aed7d12a6d6ef0a20ea_blog-link-ico.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6867bcefdc3abae0e2436a9e_resources2.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/69301ac07334f19f8157f72e_pricing-link-ico.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/686683492ec21aed4c80082d_design1.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6866833a840768ce60c44af5_design2.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6866833a6d672e7105092cf6_design3.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6866833acf7b3e43902cf213_design4.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6866833acec38f538170ef50_design5.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6866833aca902947fe631bbf_design6.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65eed04b86f6e57b08c56a14_fire-icon.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6746d4e8f7fcfb5d7d8c59eb_btn-arrow.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/674aab348dc3f5c32b9e8db8_lightning.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65ee979c6dcf8d3b940e08d5_star.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6774fee52c5c6da636e1b3e5_scroll-down.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6746d4e8a9f3f24e1adb3e86_arrow-right.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6746d4e849c6bfe0d0cc18e8_dribbble-badge.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67e7d2dc41f9e0093e15e7db_clutch-badge.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6746d4e836d20b9f5c374dd8_goodfirms-badge.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6746d4e88c67e024607e4c4d_upwork-badge.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/660c0b8c02c44d93ec1204e0_icon-arrow-black.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/642430ed0c544e31ed241358_icon-close.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466326303de460a821a270a_error__icon.svg',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/673f513df04de844e1461fb2_footer-label_sanity.svg',
  // Images (webp / avif / png)
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67e463a6c2c0bddb44d64f4f_hero-tablet.webp',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67d45e3e7e39e5f5f1a8d462_founders-photo.webp',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64b14376d206bc88a0374470_form-error_laptop.webp',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6466312f14415ae38f7bb897_error__img.webp',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66e4530a6a6e4d1501563614_booking-avatars.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66d6bbf68ff652f486a7bba3_icon-booking-stars.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/66d6bbf671d7d730e66f60f5_icon-linkedin.avif',
  // Review avatars
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64d3a1072910d4507a6b5029_review-ava_Atif-Hussain.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64d3a10634e0cb805c6ed3b5_review-ava_Dimitri-Lubaschevski.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c2722feb02cfd744b27874_review-ava_Farah-Allen.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c2722f19f2bd196643ab54_review-ava_David-Matthews.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c2722fce9e72f69a1a60ae_review-ava_Greg-Wheeler.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c2722ff3fb6ffb001c0b40_review-ava_Jeff-Voss.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c2722f621394fc8c36f5d2_review-ava_Bogdan-Suchyk.avif',
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c2722fa77b28d008ba267f_review-ava_Trace-Sauter.avif',
];

// Also grab background images from the page CSS (extracted separately)
const BG_IMAGES = [
  'https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/67e463a6c2c0bddb44d64f4f_hero-tablet.webp',
];

const UNIQUE = [...new Set([...ALL_URLS, ...BG_IMAGES])];

function classify(url) {
  const ext = extname(new URL(url).pathname).toLowerCase();
  if (['.mp4', '.webm', '.mov', '.ogv'].includes(ext)) return 'videos';
  if (ext === '.svg') return 'icons';
  if ((ext === '.ico' || ext === '.png') && url.includes('favicon')) return 'seo';
  if (['.woff', '.woff2', '.ttf', '.otf'].includes(ext)) return 'fonts';
  return 'images';
}

async function download(url, dir) {
  try {
    const filename = basename(new URL(url).pathname);
    const dest = join(BASE, dir, filename);
    if (existsSync(dest)) return { status: 'skip', file: filename };
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36' }
    });
    if (!res.ok) return { status: 'err', code: res.status, url };
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    return { status: 'ok', file: filename, dir, kb: (buf.byteLength / 1024).toFixed(1) };
  } catch (e) {
    return { status: 'err', msg: e.message, url };
  }
}

['images','icons','videos','fonts','seo'].forEach(d => mkdirSync(join(BASE, d), { recursive: true }));

console.log(`\n🚀 Downloading ${UNIQUE.length} assets from halo-lab.com...\n`);
let ok=0, skip=0, err=0;

for (let i = 0; i < UNIQUE.length; i += 4) {
  const batch = UNIQUE.slice(i, i + 4);
  const results = await Promise.all(batch.map(u => download(u, classify(u))));
  results.forEach(r => {
    if (r.status==='ok')   { ok++;   console.log(`  ✅ [${r.dir}/${r.file}] ${r.kb}kb`); }
    if (r.status==='skip') { skip++; console.log(`  ⏭  skip ${r.file}`); }
    if (r.status==='err')  { err++;  console.log(`  ❌ ${r.code||r.msg} → ${r.url?.slice(0,70)}`); }
  });
}

console.log(`\n📦 Complete: ${ok} downloaded · ${skip} skipped · ${err} failed`);
console.log(`📁 Saved to: ${BASE}`);
