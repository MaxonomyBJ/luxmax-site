# 파일 다운로드 가이드

기존 Netlify 사이트에서 필요한 파일들을 자동으로 다운로드하는 방법입니다.

## ✅ 자동 다운로드 스크립트 사용 (추천)

프로젝트 폴더에 `download_files.sh` 스크립트가 포함되어 있습니다.

### 실행 방법

터미널에서 다음 명령어를 실행하세요:

```bash
cd /Users/cj/docs_monitor/luxmax-site
bash download_files.sh
```

또는 실행 권한을 부여한 후:

```bash
chmod +x download_files.sh
./download_files.sh
```

### 다운로드되는 파일

- ✅ `css/styles.css` - 스타일시트
- ✅ `js/saas.js` - Braze 초기화 스크립트
- ✅ `js/scripts.js` - Amplitude 초기화 등
- ✅ `js/main.js` - 기타 기능 스크립트
- ✅ `assets/favicon.png` - 파비콘 이미지

---

## 📥 수동 다운로드 방법

스크립트를 사용하지 않고 직접 다운로드하는 방법입니다.

### 1. curl 명령어 사용 (macOS/Linux)

```bash
# 프로젝트 폴더로 이동
cd /Users/cj/docs_monitor/luxmax-site

# CSS 파일
curl -L -o css/styles.css https://luxmax.netlify.app/css/styles.css

# JavaScript 파일
curl -L -o js/saas.js https://luxmax.netlify.app/js/saas.js
curl -L -o js/scripts.js https://luxmax.netlify.app/js/scripts.js
curl -L -o js/main.js https://luxmax.netlify.app/js/main.js

# Assets 파일
curl -L -o assets/favicon.png https://luxmax.netlify.app/assets/favicon.png
```

### 2. wget 명령어 사용 (Linux)

```bash
# CSS 파일
wget -O css/styles.css https://luxmax.netlify.app/css/styles.css

# JavaScript 파일
wget -O js/saas.js https://luxmax.netlify.app/js/saas.js
wget -O js/scripts.js https://luxmax.netlify.app/js/scripts.js
wget -O js/main.js https://luxmax.netlify.app/js/main.js

# Assets 파일
wget -O assets/favicon.png https://luxmax.netlify.app/assets/favicon.png
```

### 3. 브라우저에서 직접 다운로드

1. 브라우저에서 다음 URL들을 열기:
   - https://luxmax.netlify.app/css/styles.css
   - https://luxmax.netlify.app/js/saas.js
   - https://luxmax.netlify.app/js/scripts.js
   - https://luxmax.netlify.app/js/main.js
   - https://luxmax.netlify.app/assets/favicon.png

2. 각 페이지에서 "다른 이름으로 저장" 또는 "Save As" 선택
3. 적절한 폴더에 저장

---

## 🔍 다운로드 확인

다운로드가 완료되었는지 확인:

```bash
cd /Users/cj/docs_monitor/luxmax-site

# 파일 목록 확인
ls -lh css/
ls -lh js/
ls -lh assets/

# 파일 크기 확인
du -h css/styles.css
du -h js/*.js
du -h assets/*.png
```

---

## ⚠️ 주의사항

1. **파일 경로**: 파일들은 반드시 올바른 폴더에 저장되어야 합니다:
   - `css/styles.css` → `css/` 폴더
   - `js/*.js` → `js/` 폴더
   - `assets/favicon.png` → `assets/` 폴더

2. **파일 이름**: 파일 이름은 대소문자를 구분합니다. 정확한 이름을 사용하세요.

3. **네트워크 연결**: 다운로드 시 인터넷 연결이 필요합니다.

4. **기존 파일 덮어쓰기**: 같은 이름의 파일이 있으면 덮어쓰기 됩니다.

---

## 🐛 문제 해결

### 파일을 찾을 수 없을 때

```bash
# 파일 존재 확인
curl -I https://luxmax.netlify.app/css/styles.css

# 404 에러가 나오면 파일 경로가 변경되었을 수 있습니다
```

### 다운로드 실패 시

1. 인터넷 연결 확인
2. URL이 올바른지 확인
3. 파일 권한 확인:
   ```bash
   ls -la css/ js/ assets/
   ```

### 파일 크기가 0일 때

파일이 제대로 다운로드되지 않았을 수 있습니다. 다시 시도하세요:

```bash
rm css/styles.css  # 파일 삭제
curl -L -o css/styles.css https://luxmax.netlify.app/css/styles.css  # 다시 다운로드
```

---

## 📝 추가 파일이 필요한 경우

만약 다른 파일들도 필요하다면, `download_files.sh` 스크립트를 수정하여 추가할 수 있습니다:

```bash
# 예: 추가 이미지 파일 다운로드
curl -L -o assets/logo.png "$BASE_URL/assets/logo.png"
```

---

## ✅ 다운로드 완료 후

파일 다운로드가 완료되면:

1. 파일들이 올바른 위치에 있는지 확인
2. GitHub에 업로드 (GITHUB_UPLOAD_GUIDE.md 참조)
3. 호스팅 플랫폼에 배포

---

**다운로드 스크립트는 이미 실행되어 모든 파일이 준비되었습니다!** 🎉
