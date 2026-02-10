# Luxmax 사이트

Braze 교육용 샘플 사이트입니다.

## 📁 프로젝트 구조

```
luxmax-site/
├── index.html              # 메인 HTML 파일
├── service-worker.js       # Service Worker (Braze 푸시 알림용)
├── manifest.json          # PWA Manifest 파일
├── README.md              # 이 파일
├── .gitignore            # Git 제외 파일 목록
├── css/
│   └── styles.css        # 스타일시트 (기존 사이트에서 복사 필요)
├── js/
│   ├── saas.js           # Braze 초기화 (기존 사이트에서 복사 필요)
│   ├── scripts.js        # Amplitude 초기화 등 (기존 사이트에서 복사 필요)
│   └── main.js           # 기타 기능 (기존 사이트에서 복사 필요)
└── assets/
    └── favicon.png        # 파비콘 (기존 사이트에서 복사 필요)
```

## 🚀 GitHub 업로드 방법 (상세 가이드)

### 1단계: Git 설치 확인

터미널에서 Git이 설치되어 있는지 확인합니다:

```bash
git --version
```

Git이 설치되어 있지 않다면:
- **macOS**: `brew install git` 또는 [Git 공식 사이트](https://git-scm.com/download/mac)에서 다운로드
- **Windows**: [Git for Windows](https://git-scm.com/download/win) 다운로드
- **Linux**: `sudo apt-get install git` (Ubuntu/Debian) 또는 `sudo yum install git` (CentOS/RHEL)

### 2단계: GitHub 계정 및 저장소 준비

1. **GitHub 계정 생성** (없는 경우)
   - [github.com](https://github.com) 접속
   - "Sign up" 클릭하여 계정 생성

2. **새 저장소 생성**
   - GitHub에 로그인
   - 우측 상단 "+" 버튼 클릭 → "New repository" 선택
   - Repository name: `luxmax-site` (또는 원하는 이름)
   - Description: "Braze 교육용 샘플 사이트"
   - **Public** 선택 (무료 호스팅 사용 시 필요)
   - "Initialize this repository with a README" **체크 해제** (이미 README.md가 있으므로)
   - "Create repository" 클릭

### 3단계: 프로젝트 폴더에서 Git 초기화

터미널에서 프로젝트 폴더로 이동:

```bash
cd /Users/cj/docs_monitor/luxmax-site
```

Git 저장소 초기화:

```bash
git init
```

### 4단계: .gitignore 파일 생성

불필요한 파일을 Git에 추가하지 않도록 `.gitignore` 파일을 생성합니다:

```bash
cat > .gitignore << 'EOF'
# macOS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# 로그 파일
*.log
npm-debug.log*

# 임시 파일
*.tmp
*.temp
EOF
```

### 5단계: 파일 추가 및 커밋

모든 파일을 스테이징 영역에 추가:

```bash
git add .
```

변경사항 확인:

```bash
git status
```

첫 번째 커밋 생성:

```bash
git commit -m "Initial commit: Luxmax site with optimized loading"
```

### 6단계: GitHub 저장소와 연결

GitHub에서 생성한 저장소의 URL을 확인합니다. 저장소 페이지에서 "Code" 버튼을 클릭하면 URL이 보입니다.

예시:
- HTTPS: `https://github.com/YOUR_USERNAME/luxmax-site.git`
- SSH: `git@github.com:YOUR_USERNAME/luxmax-site.git`

**YOUR_USERNAME을 실제 GitHub 사용자명으로 변경하세요!**

원격 저장소 추가 (HTTPS 방식 - 추천):

```bash
git remote add origin https://github.com/YOUR_USERNAME/luxmax-site.git
```

또는 SSH 방식 (SSH 키가 설정되어 있는 경우):

```bash
git remote add origin git@github.com:YOUR_USERNAME/luxmax-site.git
```

원격 저장소 확인:

```bash
git remote -v
```

### 7단계: GitHub에 업로드 (Push)

메인 브랜치를 GitHub에 업로드:

```bash
git branch -M main
git push -u origin main
```

**첫 번째 push 시 인증 요청:**
- **HTTPS 방식**: GitHub 사용자명과 Personal Access Token 입력 필요
  - Personal Access Token 생성 방법:
    1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
    2. "Generate new token" 클릭
    3. Note: "luxmax-site" 입력
    4. Expiration: 원하는 기간 선택
    5. Scopes: `repo` 체크
    6. "Generate token" 클릭
    7. 생성된 토큰을 복사 (다시 볼 수 없으므로 저장)
  - 비밀번호 대신 이 토큰을 사용합니다
- **SSH 방식**: SSH 키가 설정되어 있으면 자동 인증

### 8단계: 업로드 확인

GitHub 웹사이트에서 저장소 페이지를 새로고침하면 파일들이 업로드된 것을 확인할 수 있습니다.

---

## 🔄 이후 파일 수정 시 업로드 방법

파일을 수정한 후 GitHub에 업로드하는 방법:

```bash
# 1. 변경된 파일 확인
git status

# 2. 변경된 파일 추가
git add .

# 또는 특정 파일만 추가
git add index.html

# 3. 커밋 생성
git commit -m "수정 내용 설명"

# 4. GitHub에 업로드
git push
```

---

## 📝 필요한 추가 파일

현재 폴더에는 기본 파일만 포함되어 있습니다. 기존 사이트에서 다음 파일들을 복사해야 합니다:

### 필수 파일

1. **css/styles.css**
   - 기존 사이트의 `css/styles.css` 파일을 이 폴더의 `css/` 디렉토리에 복사

2. **js/saas.js**
   - 기존 사이트의 `js/saas.js` 파일을 이 폴더의 `js/` 디렉토리에 복사
   - Braze 초기화 코드 포함

3. **js/scripts.js**
   - 기존 사이트의 `js/scripts.js` 파일을 이 폴더의 `js/` 디렉토리에 복사
   - Amplitude 초기화 등 포함

4. **js/main.js**
   - 기존 사이트의 `js/main.js` 파일을 이 폴더의 `js/` 디렉토리에 복사

5. **assets/favicon.png**
   - 기존 사이트의 `assets/favicon.png` 파일을 이 폴더의 `assets/` 디렉토리에 복사

### 파일 복사 방법

기존 Netlify 사이트에서 파일을 다운로드하거나, 로컬에 백업이 있다면:

```bash
# 예시: 기존 파일이 다른 위치에 있는 경우
cp /path/to/old-site/css/styles.css /Users/cj/docs_monitor/luxmax-site/css/
cp /path/to/old-site/js/saas.js /Users/cj/docs_monitor/luxmax-site/js/
cp /path/to/old-site/js/scripts.js /Users/cj/docs_monitor/luxmax-site/js/
cp /path/to/old-site/js/main.js /Users/cj/docs_monitor/luxmax-site/js/
cp /path/to/old-site/assets/favicon.png /Users/cj/docs_monitor/luxmax-site/assets/
```

---

## 🌐 무료 호스팅 배포 방법

### Vercel 배포 (추천)

1. **Vercel 계정 생성**
   - [vercel.com](https://vercel.com) 접속
   - "Sign Up" 클릭 → GitHub 계정으로 로그인

2. **프로젝트 배포**
   - 대시보드에서 "Add New..." → "Project" 클릭
   - GitHub 저장소 목록에서 `luxmax-site` 선택
   - "Import" 클릭
   - 설정 확인:
     - Framework Preset: "Other"
     - Root Directory: `./`
   - "Deploy" 클릭

3. **배포 완료**
   - 약 1-2분 후 배포 완료
   - 자동으로 생성된 URL로 사이트 접속 가능
   - 예: `https://luxmax-site.vercel.app`

### Netlify 배포

1. **Netlify 계정 생성**
   - [netlify.com](https://netlify.com) 접속
   - "Sign up" 클릭 → GitHub 계정으로 로그인

2. **프로젝트 배포**
   - "Add new site" → "Import an existing project" 클릭
   - GitHub 저장소 선택
   - 빌드 설정:
     - Build command: (비워둠)
     - Publish directory: `.` (또는 비워둠)
   - "Deploy site" 클릭

### GitHub Pages 배포

1. **GitHub 저장소 설정**
   - 저장소 페이지 → Settings → Pages
   - Source: "Deploy from a branch" 선택
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
   - "Save" 클릭

2. **배포 완료**
   - 몇 분 후 `https://YOUR_USERNAME.github.io/luxmax-site` 주소로 접속 가능

---

## ⚙️ 설정 변경 필요 사항

### Amplitude API 키 설정

`index.html` 파일에서 다음 부분을 찾아 실제 API 키로 변경:

```html
amplitude.init('YOUR_AMPLITUDE_API_KEY', {
    // 설정
});
```

### Braze 설정

`js/saas.js` 파일에서 Braze API 키와 설정을 확인하고 필요시 수정합니다.

---

## 🐛 문제 해결

### Git push 실패 시

**에러: "remote: Support for password authentication was removed"**
- 해결: Personal Access Token 사용 (위 7단계 참조)

**에러: "Permission denied (publickey)"**
- 해결: SSH 키 설정 또는 HTTPS 방식 사용

### 파일이 업로드되지 않을 때

```bash
# 파일 크기 확인
ls -lh

# .gitignore 확인
cat .gitignore

# Git 상태 확인
git status
```

### 배포 후 사이트가 보이지 않을 때

1. 브라우저 콘솔 확인 (F12)
2. 호스팅 플랫폼의 빌드 로그 확인
3. 파일 경로 확인 (대소문자 구분)

---

## 📚 참고 자료

- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub 가이드](https://guides.github.com)
- [Vercel 문서](https://vercel.com/docs)
- [Netlify 문서](https://docs.netlify.com)

---

## 📄 라이선스

이 프로젝트는 교육용 샘플 사이트입니다.
