# GitHub 업로드 상세 가이드

이 가이드는 GitHub에 파일을 업로드하는 방법을 단계별로 상세하게 설명합니다.

---

## 📋 사전 준비

### 1. Git 설치 확인

터미널(또는 명령 프롬프트)을 열고 다음 명령어를 실행합니다:

```bash
git --version
```

**Git이 설치되어 있지 않은 경우:**

#### macOS
```bash
# Homebrew 사용
brew install git

# 또는 공식 사이트에서 다운로드
# https://git-scm.com/download/mac
```

#### Windows
1. [Git for Windows](https://git-scm.com/download/win) 다운로드
2. 설치 프로그램 실행
3. 기본 설정으로 설치 진행

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install git
```

### 2. GitHub 계정 준비

1. [github.com](https://github.com) 접속
2. 계정이 없으면 "Sign up" 클릭하여 계정 생성
3. 이메일 인증 완료

---

## 🚀 단계별 업로드 가이드

### 1단계: GitHub에 새 저장소 생성

1. **GitHub에 로그인**
   - [github.com](https://github.com) 접속
   - 로그인

2. **새 저장소 생성**
   - 우측 상단 "+" 버튼 클릭
   - "New repository" 선택

3. **저장소 설정**
   - **Repository name**: `luxmax-site` (또는 원하는 이름)
   - **Description**: "Braze 교육용 샘플 사이트" (선택사항)
   - **Public** 선택 (무료 호스팅 사용 시 필요)
   - ⚠️ **"Initialize this repository with a README" 체크 해제** (이미 README.md가 있으므로)
   - "Add .gitignore" 선택 안 함
   - "Choose a license" 선택 안 함

4. **저장소 생성**
   - "Create repository" 버튼 클릭

5. **저장소 URL 확인**
   - 생성된 페이지에서 "Code" 버튼 클릭
   - HTTPS URL 복사 (예: `https://github.com/YOUR_USERNAME/luxmax-site.git`)
   - **이 URL을 메모해두세요!**

---

### 2단계: 프로젝트 폴더로 이동

터미널을 열고 프로젝트 폴더로 이동합니다:

```bash
cd /Users/cj/docs_monitor/luxmax-site
```

**Windows 사용자의 경우:**
```bash
cd C:\Users\YourName\docs_monitor\luxmax-site
```

현재 위치 확인:
```bash
pwd  # macOS/Linux
cd   # Windows
```

파일 목록 확인:
```bash
ls -la  # macOS/Linux
dir     # Windows
```

---

### 3단계: Git 저장소 초기화

프로젝트 폴더를 Git 저장소로 초기화합니다:

```bash
git init
```

성공 메시지:
```
Initialized empty Git repository in /Users/cj/docs_monitor/luxmax-site/.git/
```

---

### 4단계: Git 사용자 정보 설정 (최초 1회만)

GitHub에 커밋할 때 사용할 이름과 이메일을 설정합니다:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**예시:**
```bash
git config --global user.name "홍길동"
git config --global user.email "hong@example.com"
```

설정 확인:
```bash
git config --global user.name
git config --global user.email
```

---

### 5단계: 파일 추가

모든 파일을 Git에 추가합니다:

```bash
git add .
```

**파일 추가 확인:**
```bash
git status
```

다음과 같은 출력이 보여야 합니다:
```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   README.md
        new file:   index.html
        new file:   manifest.json
        new file:   service-worker.js
        ...
```

---

### 6단계: 첫 번째 커밋 생성

변경사항을 커밋합니다:

```bash
git commit -m "Initial commit: Luxmax site with optimized loading"
```

성공 메시지:
```
[main (root-commit) abc1234] Initial commit: Luxmax site with optimized loading
 X files changed, XXX insertions(+)
```

---

### 7단계: GitHub 저장소와 연결

GitHub에서 생성한 저장소의 URL을 사용하여 원격 저장소를 추가합니다.

**1단계에서 복사한 URL을 사용하세요!**

```bash
git remote add origin https://github.com/YOUR_USERNAME/luxmax-site.git
```

**⚠️ 주의: `YOUR_USERNAME`을 실제 GitHub 사용자명으로 변경하세요!**

**예시:**
```bash
git remote add origin https://github.com/johndoe/luxmax-site.git
```

원격 저장소 확인:
```bash
git remote -v
```

다음과 같은 출력이 보여야 합니다:
```
origin  https://github.com/YOUR_USERNAME/luxmax-site.git (fetch)
origin  https://github.com/YOUR_USERNAME/luxmax-site.git (push)
```

---

### 8단계: 브랜치 이름 설정

메인 브랜치 이름을 `main`으로 설정합니다:

```bash
git branch -M main
```

---

### 9단계: GitHub에 업로드 (Push)

파일을 GitHub에 업로드합니다:

```bash
git push -u origin main
```

**첫 번째 push 시 인증이 필요합니다:**

#### HTTPS 방식 (추천)

1. **사용자명 입력**
   ```
   Username for 'https://github.com': YOUR_USERNAME
   ```

2. **비밀번호 입력**
   - ⚠️ **일반 비밀번호가 아닌 Personal Access Token 필요!**

#### Personal Access Token 생성 방법

1. GitHub 웹사이트 접속
2. 우측 상단 프로필 아이콘 클릭 → **Settings**
3. 좌측 메뉴에서 **Developer settings** 클릭
4. **Personal access tokens** → **Tokens (classic)** 클릭
5. **Generate new token** → **Generate new token (classic)** 클릭
6. 설정:
   - **Note**: `luxmax-site` (용도 설명)
   - **Expiration**: 원하는 기간 선택 (예: 90 days)
   - **Scopes**: `repo` 체크박스 선택
     - `repo`를 선택하면 하위 항목들이 자동으로 선택됨
7. 페이지 하단 **Generate token** 버튼 클릭
8. **생성된 토큰을 복사** (다시 볼 수 없으므로 안전한 곳에 저장!)
9. 터미널에서 비밀번호 입력 시 이 토큰을 붙여넣기

**성공 메시지:**
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Delta compression using up to X threads
Compressing objects: 100% (X/X), done.
Writing objects: 100% (X/X), XXX bytes | XXX bytes/s, done.
Total X (delta X), reused X (delta X), pack-reused X
remote: Resolving deltas: 100% (X/X), done.
To https://github.com/YOUR_USERNAME/luxmax-site.git
 * [new branch]      main -> main
Branch 'main' set up to track 'remote origin/main'.
```

---

### 10단계: 업로드 확인

1. 웹 브라우저에서 GitHub 저장소 페이지 열기
   - `https://github.com/YOUR_USERNAME/luxmax-site`
2. 페이지 새로고침 (F5 또는 Cmd+R / Ctrl+R)
3. 파일 목록이 보이면 성공!

---

## 🔄 파일 수정 후 다시 업로드하기

파일을 수정한 후 GitHub에 업로드하는 방법:

### 1. 변경사항 확인

```bash
git status
```

### 2. 변경된 파일 추가

**모든 변경사항 추가:**
```bash
git add .
```

**특정 파일만 추가:**
```bash
git add index.html
git add css/styles.css
```

### 3. 커밋 생성

```bash
git commit -m "수정 내용 설명"
```

**좋은 커밋 메시지 예시:**
```bash
git commit -m "Fix: Service Worker 등록 방법 수정"
git commit -m "Update: Amplitude API 키 설정 추가"
git commit -m "Add: 새로운 상품 카드 레이아웃"
```

### 4. GitHub에 업로드

```bash
git push
```

**첫 번째 push 이후에는 `-u origin main` 없이 `git push`만 사용하면 됩니다.**

---

## 🛠️ 문제 해결

### 문제 1: "remote: Support for password authentication was removed"

**원인**: GitHub에서 비밀번호 인증을 중단했습니다.

**해결**: Personal Access Token 사용 (위 9단계 참조)

---

### 문제 2: "Permission denied (publickey)"

**원인**: SSH 키가 설정되지 않았거나 HTTPS 방식을 사용해야 합니다.

**해결 방법 1: HTTPS 방식 사용 (추천)**
```bash
# 원격 저장소 URL 확인
git remote -v

# HTTPS URL로 변경
git remote set-url origin https://github.com/YOUR_USERNAME/luxmax-site.git

# 다시 push
git push -u origin main
```

**해결 방법 2: SSH 키 설정**
1. SSH 키 생성:
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```
2. SSH 키를 GitHub에 추가:
   - 생성된 공개 키 복사: `cat ~/.ssh/id_ed25519.pub`
   - GitHub → Settings → SSH and GPG keys → New SSH key
   - 키 붙여넣기 후 저장

---

### 문제 3: "fatal: not a git repository"

**원인**: Git 저장소가 초기화되지 않았습니다.

**해결**:
```bash
git init
```

---

### 문제 4: "error: failed to push some refs"

**원인**: GitHub에 이미 파일이 있거나 충돌이 발생했습니다.

**해결**:
```bash
# 원격 저장소의 변경사항 가져오기
git pull origin main --allow-unrelated-histories

# 충돌 해결 후 다시 push
git push -u origin main
```

---

### 문제 5: 파일이 업로드되지 않음

**확인 사항:**

1. `.gitignore` 파일 확인:
   ```bash
   cat .gitignore
   ```

2. 파일이 실제로 추가되었는지 확인:
   ```bash
   git status
   ```

3. 파일 크기 확인 (너무 큰 파일은 GitHub에서 거부될 수 있음):
   ```bash
   ls -lh
   ```

---

## 💡 유용한 Git 명령어

### 현재 상태 확인
```bash
git status          # 변경사항 확인
git log             # 커밋 히스토리 확인
git log --oneline   # 간단한 히스토리 확인
```

### 원격 저장소 관리
```bash
git remote -v              # 원격 저장소 목록 확인
git remote remove origin   # 원격 저장소 제거
git remote add origin URL  # 원격 저장소 추가
```

### 변경사항 되돌리기
```bash
git restore <file>         # 파일 변경사항 취소 (커밋 전)
git reset HEAD <file>      # 스테이징 영역에서 제거
git reset --hard HEAD      # 모든 변경사항 취소 (주의!)
```

### 브랜치 관리
```bash
git branch                # 브랜치 목록 확인
git branch -M main        # 현재 브랜치를 main으로 이름 변경
git checkout -b new-branch # 새 브랜치 생성 및 이동
```

---

## 📚 추가 학습 자료

- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub 가이드](https://guides.github.com)
- [Git 튜토리얼 (한글)](https://backlog.com/git-tutorial/kr/)

---

## ✅ 체크리스트

업로드 전 확인사항:

- [ ] Git 설치 확인
- [ ] GitHub 계정 생성
- [ ] GitHub에 저장소 생성
- [ ] 프로젝트 폴더에서 `git init` 실행
- [ ] `git add .` 실행
- [ ] `git commit` 실행
- [ ] `git remote add origin` 실행
- [ ] Personal Access Token 준비
- [ ] `git push -u origin main` 실행
- [ ] GitHub에서 파일 확인

---

**문제가 발생하면 위의 "문제 해결" 섹션을 참조하거나, 에러 메시지를 검색해보세요!**
