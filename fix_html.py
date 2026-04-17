# -*- coding: utf-8 -*-
import io

with open("/Users/arjun/Desktop/new web/index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Verify the lines 1752 to 1897 belong to the old hero
start_idx = None
end_idx = None
for i, line in enumerate(lines):
    if "<!-- ══════════════ HERO ══════════════ -->" in line:
        start_idx = i
        break

for i in range(start_idx, len(lines)):
    if "<!-- ══════════════ HERO SECTION ══════════════ -->" in lines[i]:
        end_idx = i
        break

# Safely delete between start_idx and end_idx if we found them
if start_idx is not None and end_idx is not None:
    # Delete up to where new hero starts
    new_lines = lines[:start_idx] + lines[end_idx:]
else:
    new_lines = lines

content = "".join(new_lines)

# Fix CTA button
content = content.replace('''<button class="hero-btn" onclick="document.getElementById('video-modal').classList.add('active'); document.getElementById('modal-vid').play();">
        <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6597f240efa939b246a117ea_icon-button-lightning_white.svg" alt="lightning icon">
        <div class="pill">BOOK A CALL</div>
        <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6597f240efa939b246a117ea_icon-button-lightning_white.svg" alt="lightning icon">
      </button>''', '''<button class="hero-btn" onclick="document.getElementById('video-modal').classList.add('active'); document.getElementById('modal-vid').play();">
        <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6597f240efa939b246a117ea_icon-button-lightning_white.svg" alt="lightning icon">
        <div class="pill">BOOK A CALL</div>
      </button>''')

# Fix Clutch review badge image (accidental ava-founders)
content = content.replace('''<div class="clutch-badge">
        <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64c90175fe3bf5e15444ddcf_ava-founders.avif" alt="Founder">''', '''<div class="clutch-badge">
        <img src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65df2245169d0dbda30cc38c_award-clutch.svg" alt="Clutch" style="width: 50px; height: 50px;">''')

with open("/Users/arjun/Desktop/new web/index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
