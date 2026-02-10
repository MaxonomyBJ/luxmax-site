# Vercel 배포 가이드

Vercel에서 Luxmax 사이트를 배포하는 상세 가이드입니다.

---

## 🚀 Vercel 프로젝트 생성 단계별 가이드

### 1단계: Vercel 대시보드 접속

1. [vercel.com](https://vercel.com) 접속
2. GitHub 계정으로 로그인 (이미 완료하셨습니다 ✅)

### 2단계: 새 프로젝트 생성

1. 대시보드에서 **"Add New..."** 버튼 클릭
2. **"Project"** 선택
3. GitHub 저장소 목록에서 **`luxmax-site`** (또는 생성한 저장소 이름) 선택
4. **"Import"** 버튼 클릭

---

## ⚙️ 프로젝트 설정 옵션

프로젝트를 import하면 설정 화면이 나타납니다. 다음 옵션들을 설정하세요:

### **Framework Preset (프레임워크 프리셋)**

**✅ 선택: `Other` 또는 `Vite`**

- 이 프로젝트는 순수 HTML/CSS/JS 정적 사이트이므로 특정 프레임워크가 없습니다
- **"Other"** 선택 (또는 자동 감지된 경우 그대로 두기)
- 만약 "Vite"가 자동으로 감지되었다면 그대로 두어도 됩니다 (Vite는 정적 사이트도 지원)

**옵션 설명:**
- ❌ **Next.js**: React 프레임워크 (사용 안 함)
- ❌ **React**: React 앱 (사용 안 함)
- ❌ **Vue.js**: Vue 프레임워크 (사용 안 함)
- ❌ **Angular**: Angular 프레임워크 (사용 안 함)
- ✅ **Other**: 일반 정적 사이트 (추천)
- ✅ **Vite**: Vite 기반 프로젝트 (정적 사이트도 지원)

---

### **Root Directory (루트 디렉토리)**

**✅ 설정: `./` (기본값, 비워두기)**

- 프로젝트 루트가 저장소 루트와 같으므로 기본값 그대로 사용
- 변경 불필요

---

### **Build and Output Settings (빌드 및 출력 설정)**

#### **Build Command (빌드 명령어)**

**✅ 설정: 비워두기 (빌드 불필요)**

- 정적 HTML 사이트이므로 빌드 과정이 없습니다
- 빌드 명령어를 비워두면 됩니다

**만약 에러가 발생한다면:**
```
echo "No build needed"
```

#### **Output Directory (출력 디렉토리)**

**✅ 설정: `.` (기본값, 비워두기)**

- 모든 파일이 루트에 있으므로 기본값 사용
- 변경 불필요

#### **Install Command (설치 명령어)**

**✅ 설정: 비워두기 (의존성 없음)**

- npm/yarn 패키지가 없으므로 설치 명령어 불필요
- 비워두면 됩니다

---

### **Environment Variables (환경 변수)**

**✅ 설정: 추가 불필요 (기본값)**

- 현재 프로젝트에는 환경 변수가 필요하지 않습니다
- 나중에 필요하면 추가할 수 있습니다

**만약 Amplitude API 키를 환경 변수로 관리하고 싶다면:**
- Key: `AMPLITUDE_API_KEY`
- Value: 실제 API 키 값
- Environment: Production, Preview, Development 모두 선택

---

## 📋 설정 요약 (체크리스트)

프로젝트 생성 시 다음 설정을 확인하세요:

- [ ] **Framework Preset**: `Other` 선택
- [ ] **Root Directory**: `./` (기본값)
- [ ] **Build Command**: 비워두기
- [ ] **Output Directory**: `.` (기본값)
- [ ] **Install Command**: 비워두기
- [ ] **Environment Variables**: 추가 불필요

---

## 🎯 권장 설정 (스크린샷 참고)

```
┌─────────────────────────────────────────┐
│ Framework Preset                        │
│ [Other ▼]                               │
│                                         │
│ Root Directory                          │
│ [./]                                    │
│                                         │
│ Build and Output Settings               │
│                                         │
│ Build Command                           │
│ [비워두기]                              │
│                                         │
│ Output Directory                        │
│ [.]                                     │
│                                         │
│ Install Command                         │
│ [비워두기]                              │
│                                         │
│ [Deploy] 버튼                           │
└─────────────────────────────────────────┘
```

---

## 🚀 배포 실행

모든 설정을 확인한 후:

1. **"Deploy"** 버튼 클릭
2. 배포 진행 상황 확인 (약 1-2분 소요)
3. 배포 완료 후 자동 생성된 URL 확인
   - 예: `https://luxmax-site.vercel.app`
   - 또는 커스텀 도메인 설정 가능

---

## ✅ 배포 완료 확인

배포가 완료되면:

1. **배포된 URL 클릭**하여 사이트 확인
2. 브라우저 개발자 도구(F12)에서 콘솔 확인
3. 모든 리소스가 정상 로드되는지 확인

---

## 🔄 이후 업데이트 방법

GitHub 저장소에 변경사항을 push하면 자동으로 재배포됩니다:

```bash
# 파일 수정 후
git add .
git commit -m "Update: 변경 내용"
git push

# Vercel이 자동으로 재배포합니다!
```

---

## 🐛 문제 해결

### 문제 1: "Build Failed" 에러

**원인**: 빌드 명령어가 잘못 설정되었을 수 있습니다.

**해결**:
1. 프로젝트 설정 → Build & Development Settings
2. Build Command를 비워두기
3. 다시 배포

### 문제 2: 파일을 찾을 수 없음 (404)

**원인**: Output Directory 설정이 잘못되었을 수 있습니다.

**해결**:
1. 프로젝트 설정 → Build & Development Settings
2. Output Directory를 `.`로 설정
3. 다시 배포

### 문제 3: CSS/JS 파일이 로드되지 않음

**원인**: 파일 경로 문제일 수 있습니다.

**해결**:
1. 브라우저 개발자 도구 → Network 탭 확인
2. 404 에러가 있는 파일 확인
3. `index.html`에서 파일 경로 확인
4. 상대 경로가 올바른지 확인 (`css/styles.css`, `js/saas.js` 등)

---

## 📝 추가 설정 (선택사항)

### 커스텀 도메인 설정

1. 프로젝트 설정 → Domains
2. 원하는 도메인 추가
3. DNS 설정 안내에 따라 도메인 설정

### 환경 변수 추가

1. 프로젝트 설정 → Environment Variables
2. Key와 Value 입력
3. Environment 선택 (Production, Preview, Development)
4. 저장 후 재배포

---

## 🎉 완료!

이제 사이트가 Vercel에 배포되었습니다!

**배포된 URL**: `https://luxmax-site-xxxxx.vercel.app`

이 URL을 공유하거나 커스텀 도메인을 연결할 수 있습니다.

---

## 📚 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Vercel 배포 가이드](https://vercel.com/docs/deployments/overview)
- [정적 사이트 배포](https://vercel.com/docs/deployments/static-jamstack)
