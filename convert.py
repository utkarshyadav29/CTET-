import json

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('const subjectsData = ', '').strip()
if text.endswith(';'):
    text = text[:-1]

data = json.loads(text)
with open('quiz.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Converted successfully to quiz.json")
