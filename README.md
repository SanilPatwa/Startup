
📌 What We Are Building

We are building a WhatsApp API Dashboard for businesses.

This software will:

Create official WhatsApp Cloud API for clients

Allow safe bulk WhatsApp broadcasts

Follow Meta rules to avoid bans

Provide a simple dashboard for clients

This is NOT WhatsApp Web and NOT chat inbox.
This is a WhatsApp API + bulk messaging system.


Basic Git workflow decided

🌳 Branch Structure (VERY IMPORTANT)

We use 3 types of branches:

main        → stable / production (DO NOT TOUCH)
develop     → daily merged code
feature/*   → your personal work

❌ Rules

Do NOT push directly to main

Do NOT work directly on develop

✅ Rules

Every task = new feature/ branch

Use Pull Request (PR) to merge

🧑‍💻 How Everyone Should Work (Step-by-Step)
1️⃣ Pull latest code
git checkout develop
git pull

2️⃣ Create your feature branch
git checkout -b feature/your-task-name


Example:

feature/whatsapp-setup
feature/broadcast-engine
feature/template-ui

3️⃣ Do your work

Write code only related to your task.

4️⃣ Commit and push
git add .
git commit -m "Short clear message"
git push origin feature/your-task-name

5️⃣ Create Pull Request (PR)

Base branch: develop

Wait for review

Fix comments if any

⚠️ Important Product Rules

Only official WhatsApp Cloud API

Only approved message templates

Bulk messages must be rate limited

No shortcuts that risk number ban

🧠 Team Goal (Phase 1)

