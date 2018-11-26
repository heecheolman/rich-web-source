# chat app

간단한 채팅 웹앱을 구현했습니다. 서버없이 진행한 프로젝트로, 프론트 설계쪽에 집중했습니다.

#### [Build File Github Repository](https://github.com/heecheolman/rich-web)

#### [Live Demo](https://heecheolman.github.io/rich-web)


## 실행화면

![이미지](https://github.com/heecheolman/rich-web/blob/master/screenShots/screenshot1.png?raw=true)

![이미지](https://github.com/heecheolman/rich-web/blob/master/screenShots/screenshot2.png?raw=true)


## 설치

``` bash
$ git clone https://github.com/heecheolman/rich-web-source.git
$ cd rich-web-source
$ npm install
$ npm run start
```

## 개발환경

### [Webpack](https://webpack.js.org)
웹팩을 이용하여 소스코드들을 번들링하고 `webpack-dev-server` 를 사용해 개발시 실시간 빌드를 해줍니다.

### [Babel](https://babeljs.io)
최신 자바스크립트 문법을 브라우저에서 사용가능할 수 있도록 변환해주는 transpiler 입니다.

### [ESLint](https://eslint.org)
코딩 스타일을 일관성있게 맞추기 위하여 사용하였습니다. 해당 프로젝트는 airbnb 베이스로 작성하였습니다.

### [Vue.js](https://kr.vuejs.org/v2/guide/index.html)
컴포넌트 기반 웹 프레임워크이며 MVVM패턴의 뷰 모델(ViewModel)에 해당하는 화면단 라이브러리.

### [vue-router](https://router.vuejs.org/kr/)
Vue.js 에서 라우팅을 할 수 있도록 지원하는 공식 라이브러리, 채팅방 리스트에서 채팅방으로 들어갈 때 라우팅을 합니다.

### [vuex](https://vuex.vuejs.org/kr/guide/state.html)
vue.js 의 상태관리를 위한 패턴또는 라이브러리, 일종의 중앙저장소를 두어 앱의 상태들을 관리합니다.  
상태관리 라이브러리(패턴)를 사용하지 않는다면 컴포넌트 기반 웹 프레임워크에서 props 를 주고받는데 Eventbus 를 이용할 수도 있지만, 웹의 규모가 커질수록 복잡해진다는 단점이있다.  

## 프로젝트

### 프로젝트 폴더구조
```
rich-web/
├── build/
├── config/
├── src/
│   ├── api/
│   ├── assets/
│   │   └── scss/
│   │       ├── base/
│   │       ├── components/
│   │       ├── layout/
│   │       ├── pages/
│   │       ├── mixin/
│   │       └── main.scss   
│   ├── config/
│   ├── lib/
│   ├── spa/
│   │   ├── ChatList/
│   │   │   └── components/    
│   │   └── ChatRoom/
│   │       └── components/
│   └── vuex/
└── static/
```

#### src/api/index.js
서버에서 데이터를 요청해오는 가상의 메서드들이 존재합니다.  
받아오는 임시 데이터파일은 `chatData.js`, `chatFriendList.js`, `userData.js` 입니다.

#### src/assets/scss
scss 의 폴더구조는 다음의 폴더구조를 모방했습니다 [Folder Structure](http://thesassway.com/beginner/how-to-structure-a-sass-project)
`main.scss` 파일에서 전부 import 하여 `main.js` 에서 한번의 import 로 사용할 수 있게 하였습니다.

#### src/config/router.js
vue-router 를 이용해 라우트합니다.

#### src/lib/TimeParser.js
프로젝트 진행시 직접 만든 `TimeParser.js` 입니다. 채팅방에서 채팅메세지의 시간을 보여주기위해 만들었습니다. [moment.js](https://momentjs.com/) 를 이용할 수 있었지만, 직접 구현 해보고싶어 구현하였습니다.

#### src/spa/
페이지 단위로 폴더를 갖습니다. 페이지 단위의 폴더 내에는 `components/` 폴더가 있는데 이 폴더는 해당 페이지에 존재하는 컴포넌트를 가지고 있습니다.

#### src/vuex/
vuex 의 상태관리에 관련된 파일들이 있습니다. 폴더구조 다음을 참고하였습니다.  
[vuex 폴더구조](https://vuex.vuejs.org/kr/guide/structure.html)


### 기능

#### 최근 메세지 정렬
**최근에 대화한 사람을 가장 위쪽으로 정렬합니다.**    
각 방은 `currentTimestamp` 라는 키를 가지고있는데 메세지를 주거나 받을 때, 해당 키의 값을 업데이트시켜줍니다.  

#### 공백 입력 방지
**메세지 전송시 불필요한 공백이 있을 경우 1개의 공백만 가능토록 하였습니다.**    
이는 기존에 `String.prototype.trim()` 이라는 메소드를 통해 구현할 수 있는데, 크로스 브라우징을 위해 정규화를 통해 구현하였습니다.  
정규화는 다음과 같습니다.
```javascript
replace(/(^\s*) | (\s*$)/gi, '');
```

#### 전송버튼 비활성화
**아무것도 입력하지 않았을 시 전송버튼을 `disable` 상태로 변경합니다.**  
사용자의 잘못된 입력을 방지하고, 명시적으로 보여주기위해 구현하였습니다.

#### 오토스크롤
**채팅방에서 입력을 하거나, 대화했던 방에 들어갈 시 가장 최근메세지로 스크롤해줍니다.**  
유저에게 편리한 ux를 제공하기위해 구현하였고, 구현방식은 Vue 의 라이프사이클 훅인 `updated()` 와 `created()` 에 삽입하였습니다.

#### 반응형 웹
**해상도 대응**  
모바일시대에 맞게 모바일이나 태블릿에서도 쾌적하게 이용가능하도록 대응하였습니다.  
meta 태그에 viewport 를 삽입하고 `scss/mixin/_media.scss` 파일에 3개의 width 기준값을 갖는 media query문을 작성하였습니다.

> 크기순서로 `640px`, `425px`, `375px`를 기준으로 잡았습니다.  
