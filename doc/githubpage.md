### GitHub Pages에 empasy.io 커스텀 도메인 배포 가이드

`empasy.io` 도메인을 GitHub Pages에 연결하여 사이트를 배포하기 위한 단계별 가이드입니다.

#### 1. 프로젝트 설정 확인
현재 프로젝트는 이미 GitHub Pages 배포를 위한 준비가 되어 있습니다.
- `package.json`: `homepage` 필드가 `https://empasy.io`로 설정되어 있습니다.
- `CNAME` 파일: 루트 디렉토리에 `empasy.io` 내용이 포함된 파일이 존재합니다.
- `.github/workflows/main.yml`: 빌드 시 `CNAME` 파일을 `dist` 폴더로 복사하고, 이를 `gh-pages` 브랜치로 자동 배포하도록 설정되어 있습니다.

#### 2. DNS 레코드 설정 (도메인 관리 업체)
`empasy.io` 도메인을 관리하는 서비스(예: 가비아, Route53 등)의 DNS 설정에서 아래 레코드를 추가해야 합니다.

**Apex 도메인 (empasy.io) 설정을 위한 A 레코드:**
GitHub Pages의 IP 주소 4개를 모두 등록하는 것이 권장됩니다.
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**WWW 서브도메인 (선택 사항):**
- 타입: `CNAME`
- 호스트: `www`
- 값: `[your-github-username].github.io` (또는 프로젝트가 속한 조직의 GitHub Pages 주소)

#### 3. GitHub Repository 설정
1. GitHub 리포지토리의 **Settings** 탭으로 이동합니다.
2. 왼쪽 메뉴에서 **Pages**를 클릭합니다.
3. **Build and deployment** 섹션의 **Source**가 `Deploy from a branch`로 되어 있는지 확인합니다.
4. **Branch**를 `gh-pages` (또는 배포된 브랜치)와 `/ (root)` 폴더로 설정하고 **Save**를 누릅니다.
5. **Custom domain** 섹션에 `empasy.io`를 입력하고 **Save**를 클릭합니다. (이미 `CNAME` 파일이 배포되었다면 자동으로 채워져 있을 수 있습니다.)
6. **Enforce HTTPS** 옵션을 체크하여 보안 연결을 활성화합니다. (DNS 설정 후 인증서 발급까지 시간이 다소 소요될 수 있습니다.)

#### 4. 배포 프로세스
- 현재 설정된 GitHub Actions에 의해 `main` 브랜치에 코드를 `push`하면 자동으로 빌드 및 배포가 진행됩니다.
- 수동 배포가 필요한 경우: `npm run deploy` 명령어를 사용할 수 있습니다.

#### 5. 주의 사항
- DNS 변경 사항은 전 세계적으로 반영되는 데 최대 24~48시간이 걸릴 수 있습니다.
- `react-snap`을 통한 SSG 빌드 결과물이 `dist` 폴더에 생성되므로, `CNAME` 파일이 반드시 `dist` 폴더로 복사되는지 (`npm run build` 스크립트 확인) 유의해야 합니다. 현재 설정상 자동으로 처리됩니다.