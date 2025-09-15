# GitHub Pages 배포 가이드

이 프로젝트는 GitHub Pages를 사용하여 웹서비스로 배포됩니다.

## 배포 설정

### 1. GitHub Pages 설정

1. GitHub 저장소의 Settings 탭으로 이동
2. Pages 섹션에서 Source를 "GitHub Actions"로 설정
3. 저장소가 public이어야 합니다

### 2. 자동 배포

- `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다
- GitHub Actions 워크플로우가 자동으로 실행되어 빌드 및 배포를 수행합니다

### 3. 수동 배포

로컬에서 수동으로 빌드하고 배포하려면:

```bash
# 의존성 설치
pnpm install

# 웹 앱 빌드
cd apps/web
pnpm build

# 빌드된 파일은 apps/web/out 디렉토리에 생성됩니다
```

## 배포 URL

배포가 완료되면 다음 URL에서 웹사이트에 접근할 수 있습니다:

- `https://[사용자명].github.io/dosi`

## 주의사항

1. **이미지 최적화**: GitHub Pages에서는 Next.js의 이미지 최적화 기능을 사용할 수 없으므로 `unoptimized: true`로 설정되어 있습니다.

2. **API 라우트**: GitHub Pages는 정적 사이트 호스팅이므로 API 라우트를 사용할 수 없습니다. 외부 API 서버가 필요합니다.

3. **basePath**: 프로젝트 이름이 'dosi'로 설정되어 있어 URL에 `/dosi`가 포함됩니다.

## 문제 해결

### 빌드 실패 시

1. 로컬에서 빌드 테스트:
   ```bash
   cd apps/web
   pnpm build
   ```

2. TypeScript 오류 확인:
   ```bash
   pnpm typecheck
   ```

3. ESLint 오류 확인:
   ```bash
   pnpm lint
   ```

### 배포가 되지 않는 경우

1. GitHub Actions 탭에서 워크플로우 실행 상태 확인
2. 저장소가 public인지 확인
3. GitHub Pages 설정에서 Source가 "GitHub Actions"로 설정되어 있는지 확인

## 커스텀 도메인 설정

커스텀 도메인을 사용하려면:

1. `.github/workflows/deploy.yml` 파일의 `cname` 필드에 도메인 입력
2. 도메인 DNS 설정에서 CNAME 레코드 추가
3. GitHub 저장소 Settings > Pages에서 Custom domain 설정
