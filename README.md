# react-ts-tutorial

# 용컴 주니어 개발자들의 ts + react 공부를 위한 저장소 입니다.

## 시작하기
- env파일을 넣습니다. (케이시에게 요청)
- npm install: 의존성 모듈들을 설치합니다.
- npm install 에러 발생 시: npm audit로 문제 확인 후 해당 패키지를 설치합니다.
- npm install remark@13.0.0 수동 설치 권장
- npm run dev: 개발자모드로 앱을 실행합니다.

### env
- next.js는 NEXT_PUBLIC_로 시작하는 변수명을 가집니다.

## next-js
- next.js는 pages 폴더 내부의 js, jsx, ts, tsx 파일을 페이지라는 react component로 변환한다. 변환된 페이지는 모두 정적 html 엘리먼트로 pre-render된다. (두가지 타입중 선택 가능)
- 예제) 'pages/about.js' 는 주소 '/about'으로 접속 가능하다.
- 동적 라우팅 지원. 'pages/posts/[id].js' 는 'posts/1' , 'posts/2' 로 접속 가능하다.

### 두가지 pre rendering 타입
- Static Generation: 빌드될때 HTML로 변환
- Server-side Rendering: 요청시 변환