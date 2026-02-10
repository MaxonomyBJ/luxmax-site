# 페이지 추가 가이드

생성된 추가 페이지들에 대한 설명입니다.

---

## 📄 생성된 페이지 목록

### 1. **login.html** - 로그인 페이지
- **경로**: `/login.html`
- **기능**: 사용자 로그인
- **특징**:
  - 아이디 입력 폼
  - 로그인 상태 확인
  - 로그인 후 리다이렉트 지원 (`?redirect=mypage` 등)
  - main.js의 `handleNewLogin` 함수와 연동

### 2. **product-detail.html** - 상품 상세 페이지
- **경로**: `/product-detail.html?id=상품ID`
- **기능**: 상품 상세 정보 표시
- **특징**:
  - URL 파라미터에서 상품 ID 읽기
  - 상품 이미지, 이름, 가격 표시
  - 수량 선택
  - 장바구니 추가 / 바로 구매 버튼
  - 이벤트 트래킹 (상품 상세 페이지 조회)

### 3. **cart.html** - 장바구니 페이지
- **경로**: `/cart.html` 또는 `/cart.html?id=상품ID&quantity=수량`
- **기능**: 장바구니 관리 및 주문
- **특징**:
  - 장바구니 아이템 목록 표시
  - 수량 변경
  - 아이템 삭제
  - 주문 요약 (상품 합계, 배송비, 총 결제금액)
  - 주문하기 기능
  - main.js의 `purchaseRequest` 함수와 연동

### 4. **mypage.html** - 마이페이지
- **경로**: `/mypage.html`
- **기능**: 사용자 정보 및 활동 내역
- **특징**:
  - 로그인 상태 확인 (비로그인 시 로그인 페이지로 리다이렉트)
  - 사용자 정보 표시
  - 활동 통계 (로그인 횟수, 보유 쿠폰, 주문 내역)
  - 보유 쿠폰 목록
  - 주문 내역
  - 로그아웃 기능

### 5. **common.html** - 공통 네비게이션 바
- **경로**: `/common.html`
- **기능**: 공통 네비게이션 컴포넌트
- **특징**:
  - 모든 페이지에서 재사용 가능
  - main.js에서 `$("#navbarCommon").load("common.html")`로 로드
  - 로그인 상태에 따른 UI 변경
  - 장바구니 배지 표시
  - 푸시 알림 권한 요청 버튼

---

## 🔗 페이지 간 연결 방법

### 메인 페이지에서 상품 클릭 시

```html
<!-- index.html 또는 상품 목록에서 -->
<a href="product-detail.html?id=상품ID">
    <img src="상품이미지" alt="상품명">
    <h5>상품명</h5>
</a>
```

### 상품 상세 페이지에서 장바구니 추가

```javascript
// product-detail.html에서 자동 처리됨
// "장바구니에 추가" 버튼 클릭 시 cart.html로 이동하거나
// localStorage에 저장됨
```

### 네비게이션에서 페이지 이동

```html
<!-- common.html에 이미 포함됨 -->
<a href="index.html">홈</a>
<a href="cart.html">장바구니</a>
<a href="login.html">로그인</a>
<a href="mypage.html">마이페이지</a>
```

---

## 🛠️ main.js와의 연동

### 로그인 처리

```javascript
// login.html에서
if (typeof handleNewLogin === 'function') {
    handleNewLogin(); // main.js의 함수 사용
}
```

### 상품 정보 가져오기

```javascript
// product-detail.html에서
if (typeof getItemById === 'function') {
    const product = getItemById(productId); // main.js의 함수 사용
}
```

### 장바구니 관리

```javascript
// cart.html에서
if (typeof addCartItem === 'function') {
    addCartItem(productId, quantity); // main.js의 함수 사용
}

if (typeof removeCartItemById === 'function') {
    removeCartItemById(productId); // main.js의 함수 사용
}

if (typeof purchaseRequest === 'function') {
    purchaseRequest(); // main.js의 함수 사용
}
```

---

## 📝 필요한 추가 작업

### 1. 상품 데이터 구조 확인

`main.js`에서 사용하는 상품 데이터 구조를 확인하고, `product-detail.html`과 `cart.html`이 올바르게 작동하도록 수정이 필요할 수 있습니다.

**확인 사항:**
- 상품 ID 필드명 (`id`, `productId` 등)
- 상품 정보 저장 위치 (`localStorage` 키)
- 상품 이미지 경로

### 2. common.html 로드 확인

`main.js`에서 `common.html`을 로드하는 부분이 있는지 확인:

```javascript
// main.js에 있어야 함
$("#navbarCommon").load("common.html", function() {
    // 로드 후 콜백
});
```

### 3. 이벤트 트래킹 함수 확인

페이지에서 사용하는 트래킹 함수들이 정의되어 있는지 확인:

```javascript
// 필요한 함수들
- brazeLogCustomEvent(eventName, properties)
- amplitudeLogCustomEvent(eventName, properties)
- brazeSetCustomAttribute(key, value)
```

---

## 🎨 스타일 커스터마이징

모든 페이지는 `css/styles.css`를 사용하므로, 기존 스타일이 자동으로 적용됩니다.

필요시 각 페이지에 추가 스타일을 적용할 수 있습니다:

```html
<style>
/* 페이지별 커스텀 스타일 */
.custom-style {
    /* 스타일 정의 */
}
</style>
```

---

## 🐛 문제 해결

### 페이지가 표시되지 않을 때

1. **파일 경로 확인**
   ```bash
   ls -la luxmax-site/*.html
   ```

2. **브라우저 콘솔 확인**
   - F12 → Console 탭
   - 에러 메시지 확인

3. **네트워크 탭 확인**
   - F12 → Network 탭
   - 파일 로드 실패 확인

### 상품 정보가 표시되지 않을 때

1. **localStorage 확인**
   ```javascript
   // 브라우저 콘솔에서
   localStorage.getItem('lm.storage.item.items')
   ```

2. **상품 ID 확인**
   - URL 파라미터가 올바른지 확인
   - `product-detail.html?id=123` 형식

### 로그인이 작동하지 않을 때

1. **localStorage 확인**
   ```javascript
   // 브라우저 콘솔에서
   localStorage.getItem('lm.stroage.login.userId')
   ```

2. **main.js 함수 확인**
   - `handleNewLogin` 함수가 정의되어 있는지 확인
   - `changeUser` 함수가 정의되어 있는지 확인

---

## 📚 참고 사항

### URL 파라미터 사용

```javascript
// URL에서 파라미터 읽기
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const quantity = parseInt(urlParams.get('quantity')) || 1;
```

### localStorage 사용

```javascript
// 저장
localStorage.setItem('key', JSON.stringify(data));

// 읽기
const data = JSON.parse(localStorage.getItem('key') || '[]');

// 삭제
localStorage.removeItem('key');
```

### 이벤트 트래킹

```javascript
// Braze 이벤트
if (typeof brazeLogCustomEvent === 'function') {
    brazeLogCustomEvent('이벤트명', { 속성: 값 });
}

// Amplitude 이벤트
if (typeof amplitudeLogCustomEvent === 'function') {
    amplitudeLogCustomEvent('이벤트명', { 속성: 값 });
}
```

---

## ✅ 체크리스트

배포 전 확인사항:

- [ ] 모든 HTML 파일이 올바른 위치에 있는지 확인
- [ ] `common.html`이 모든 페이지에서 로드되는지 확인
- [ ] 상품 클릭 시 `product-detail.html`로 이동하는지 확인
- [ ] 로그인 기능이 작동하는지 확인
- [ ] 장바구니 추가/삭제가 작동하는지 확인
- [ ] 주문하기 기능이 작동하는지 확인
- [ ] 마이페이지가 로그인 상태를 확인하는지 확인
- [ ] 이벤트 트래킹이 작동하는지 확인

---

**모든 페이지가 준비되었습니다! 이제 GitHub에 업로드하고 Vercel에 재배포하세요.** 🚀
