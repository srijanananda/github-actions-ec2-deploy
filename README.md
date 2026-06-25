# GitHub Actions EC2 Deployment Pipeline

Automatically deploys a Node.js app to AWS EC2 on every push to main.

## How It Works

1. Developer pushes code to GitHub
2. GitHub Actions pipeline triggers automatically
3. Pipeline SSHs into EC2
4. Pulls latest code, installs dependencies, restarts app
5. App is live at http://EC2_IP:3000

## Tech Stack

- **App:** Node.js
- **Server:** AWS EC2 (Amazon Linux 2023)
- **Process Manager:** PM2
- **CI/CD:** GitHub Actions
- **Deployment:** SSH via appleboy/ssh-action

## Pipeline Steps

| Step | Action |
|------|--------|
| Trigger | Push to main branch |
| Runner | Ubuntu Latest (GitHub hosted) |
| Deploy | SSH into EC2 |
| Update | git pull + npm install |
| Restart | PM2 process restart |