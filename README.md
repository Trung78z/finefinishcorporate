cd client
npm ci
npm run dev
cd admin
npm ci
npm run dev
git add .
git commit -m "updated"
git push -u origin main
