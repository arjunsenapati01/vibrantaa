import json
from bs4 import BeautifulSoup
import sys

try:
    with open('/tmp/halo.html', 'r', encoding='utf-8') as f:
        html = f.read()
except FileNotFoundError:
    print("Could not find /tmp/halo.html, aborting.")
    sys.exit(1)

soup = BeautifulSoup(html, 'html.parser')

# Extract entire <main> tag content
main_content = soup.find('main', class_='main')
if main_content:
    with open('main_structure.html', 'w', encoding='utf-8') as f:
        f.write(main_content.prettify())
    print("Extracted main contents to main_structure.html")
else:
    print("Could not find <main class='main'> tag.")
