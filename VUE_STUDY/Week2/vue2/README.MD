# Vue2 Project
- 따라하며 배우는 Vue.js
  

## Installation
- (cmd) vue create project_name
- (preset) Manually select features
- (features) Vue version, Babel, Router, Vuex, CSS Pre-processors
- (version) 2.x
- (history mode) Y
- (CSS preprocessor) Sass/SCSS(with node-sass)
- (config for Babel, ESLint) In package.json
- (Save preset) N


## Pluggin
- Vetur
- Vue VSCode Snippets
- Vetur에서 code highlighting과 snippet을 지원하지만, 일부 지원하지 않는 snippet은 Vue VSCode Snippets을 같이 설치하여 해결할 수 있다.

## Moduels
Vue Router
- Vue에서 공식적으로 지원하는 라우터로 Vue와 Vue Router을 이용해 SPA를 구성합니다.
- Router는 URL마다 페이지를 구분하여 각각 화면을 표시할 수 있게 도와주는 역할을 합니다.
- vue-router는 $router, $router 두 객체로 나누어 볼 수 있는데, $route는 현재 URL에 기반하여 라우터의 상태를 나타내는 객체이고, $router는 SPA안에서 페이지를 이동할 수 있는 메서드를 지원.  

Vuex
- vue와 같이 사용하는 Vue 상태관리라이브러리
- vue 어플리케이션 내의 모든 컴포넌트에 대한 중앙 저장소 역할을 함.  

Babel
- JavaScript의 문법은 빠르게 진화하지만, 정작 코드를 실행하는 브라우저 환경은 다양함.
- 브라우저의 종류에 따라, 브라우저 버전에 따라 지원하는 문법이 달라지기 때문에 JavaScript의 최신 문법인 ES6+를 구버전 브라우저가 이해할 수 있도록 변환해주는 JavaScript Transpiler.

## componets 만들어보기
- 컴포넌트 파일은 Vue의 템플릿 문법으로 만들어진 .vue를 의미
- 하나의 페이지도 가능하고, 페이지의 일부도 가능함
- /src/components/layout/Header.vue라는 파일을 만들고
- /src/App.vue에서 script부분에 다음과 같이 작성한 후 `<template>`안에 <Header/> 이렇게 써주면 템플릿을 불러와서 사용할 수 있음.

```javascript
<script>
    import Header from '@/components/layout/Header'
    export default {
        components: {
            Header
        }
    }
</script>
```
