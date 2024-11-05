## 실행 방법

### 1. '.env' 파일 작성

- **1-1.** 'env_example'을 참고하여 .env 파일을 suhwan/back 폴더 내에 작성하세요.

- **1-2.** 경로를 suhwan/back 폴더 내로 이동하세요. 

### 2. prisma & db 동기화

- **2-1.** npx prisma migrate dev --name init

- **2-2.** npx prisma generate


### 3. express 실행

- **3-1.** npm run dev -> nodemon app.js 실행

- **3-2.** npm run start -> node app.js 실행


