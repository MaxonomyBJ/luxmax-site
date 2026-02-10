# 추가 수정 사항 (2차)

## 수정된 문제들

### 1. ✅ 홈 상단 장바구니 아이콘 클릭 시 오류 페이지 발생
**문제**: `/cart` 경로가 실제 파일이 아니어서 404 에러 발생
**수정**: 
- `vercel.json` 파일 생성: `/cart` → `index.html`로 리다이렉트 설정
- `_redirects` 파일 생성: Netlify용 리다이렉트 설정
- `index.html`의 `id="mainSection"` → `id="main_section"`으로 변경 (main.js와 일치)

**수정 파일**:
- `index.html` - ID 수정
- `vercel.json` - 새로 생성 (Vercel용)
- `_redirects` - 새로 생성 (Netlify용)

### 2. ✅ 상품 상세페이지에서 바로구매하기, 장바구니 가기 시 오류페이지 발생
**문제**: `order.html` 파일이 없어서 404 에러 발생
**수정**: 
- 기존 사이트에서 `order.html` 파일 다운로드
- Service Worker 등록 방식 수정

**생성 파일**: `order.html`

### 3. ✅ 홈 상단 마이페이지 아이콘 클릭 시 오류 페이지 발생
**문제**: 
- `mypageClick()` 함수에서 `location.pathname = 'mypage.html'`로 이동
- `mypage.html` 파일이 없음

**수정**: 
- 기존 사이트에서 `mypage.html` 파일 다운로드
- `mypageClick()` 함수에서 `window.location.href = '/mypage'`로 변경
- `vercel.json`에 `/mypage` → `mypage.html` 리다이렉트 추가
- Service Worker 등록 방식 수정

**수정 파일**:
- `js/main.js` - `mypageClick()` 함수 수정
- `mypage.html` - 새로 생성

## 추가 수정 사항

### index.html ID 수정
- `id="mainSection"` → `id="main_section"`으로 변경
- `main.js`에서 `main_section`을 찾으므로 일치시켜야 함

### Service Worker 수정
- `order.html`: Service Worker를 올바른 방식으로 등록
- `mypage.html`: Service Worker를 올바른 방식으로 등록

## 파일 변경 사항

### 수정된 파일
1. `js/main.js` - `mypageClick()` 함수 수정
2. `index.html` - `mainSection` → `main_section` ID 변경
3. `order.html` - Service Worker 등록 방식 수정
4. `mypage.html` - Service Worker 등록 방식 수정

### 생성된 파일
1. `order.html` - 주문 페이지 (기존 사이트에서 다운로드)
2. `mypage.html` - 마이페이지 (기존 사이트에서 다운로드)
3. `vercel.json` - Vercel 리다이렉트 설정
4. `_redirects` - Netlify 리다이렉트 설정

## 테스트 체크리스트

- [ ] 홈 상단 장바구니 아이콘 클릭 시 장바구니 페이지가 정상 표시되는지 확인
- [ ] 상품 상세페이지에서 "바로 구매하기" 클릭 시 주문 페이지가 새 창으로 열리는지 확인
- [ ] 상품 상세페이지에서 "장바구니 담기" 클릭 시 정상 작동하는지 확인
- [ ] 홈 상단 마이페이지 아이콘 클릭 시 마이페이지가 정상 표시되는지 확인
- [ ] 로그인 후 마이페이지 접근이 정상 작동하는지 확인

## 호스팅 플랫폼별 설정

### Vercel
- `vercel.json` 파일이 자동으로 인식됨
- 추가 설정 불필요

### Netlify
- `_redirects` 파일이 자동으로 인식됨
- 추가 설정 불필요

### GitHub Pages
- 리다이렉트 설정이 제한적임
- `index.html`에서 JavaScript로 라우팅 처리 필요할 수 있음

## 다음 단계

1. GitHub에 업로드:
   ```bash
   cd /Users/cj/docs_monitor/luxmax-site
   git add .
   git commit -m "Fix: 장바구니, 주문, 마이페이지 경로 수정 및 파일 추가"
   git push
   ```

2. Vercel 자동 재배포 확인

3. 배포된 사이트에서 모든 기능 테스트
