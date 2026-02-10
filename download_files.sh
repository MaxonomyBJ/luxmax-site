#!/bin/bash

# Luxmax 사이트 파일 다운로드 스크립트
# 기존 Netlify 사이트에서 필요한 파일들을 다운로드합니다.

BASE_URL="https://luxmax.netlify.app"
DOWNLOAD_DIR="/Users/cj/docs_monitor/luxmax-site"

echo "=========================================="
echo "Luxmax 사이트 파일 다운로드 시작"
echo "=========================================="
echo ""

# 디렉토리 생성
mkdir -p "$DOWNLOAD_DIR/css"
mkdir -p "$DOWNLOAD_DIR/js"
mkdir -p "$DOWNLOAD_DIR/assets"

# CSS 파일 다운로드
echo "📥 CSS 파일 다운로드 중..."
curl -L -o "$DOWNLOAD_DIR/css/styles.css" "$BASE_URL/css/styles.css"
if [ $? -eq 0 ]; then
    echo "✅ css/styles.css 다운로드 완료"
else
    echo "❌ css/styles.css 다운로드 실패"
fi

# JavaScript 파일 다운로드
echo ""
echo "📥 JavaScript 파일 다운로드 중..."

# saas.js
curl -L -o "$DOWNLOAD_DIR/js/saas.js" "$BASE_URL/js/saas.js"
if [ $? -eq 0 ]; then
    echo "✅ js/saas.js 다운로드 완료"
else
    echo "❌ js/saas.js 다운로드 실패"
fi

# scripts.js
curl -L -o "$DOWNLOAD_DIR/js/scripts.js" "$BASE_URL/js/scripts.js"
if [ $? -eq 0 ]; then
    echo "✅ js/scripts.js 다운로드 완료"
else
    echo "❌ js/scripts.js 다운로드 실패"
fi

# main.js
curl -L -o "$DOWNLOAD_DIR/js/main.js" "$BASE_URL/js/main.js"
if [ $? -eq 0 ]; then
    echo "✅ js/main.js 다운로드 완료"
else
    echo "❌ js/main.js 다운로드 실패"
fi

# Assets 파일 다운로드
echo ""
echo "📥 Assets 파일 다운로드 중..."

# favicon.png
curl -L -o "$DOWNLOAD_DIR/assets/favicon.png" "$BASE_URL/assets/favicon.png"
if [ $? -eq 0 ]; then
    echo "✅ assets/favicon.png 다운로드 완료"
else
    echo "❌ assets/favicon.png 다운로드 실패"
fi

echo ""
echo "=========================================="
echo "다운로드 완료!"
echo "=========================================="
echo ""
echo "다운로드된 파일:"
echo "  - css/styles.css"
echo "  - js/saas.js"
echo "  - js/scripts.js"
echo "  - js/main.js"
echo "  - assets/favicon.png"
echo ""
