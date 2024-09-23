# React Custom-toast

JS 기반의 pub/sub 패턴으로 구현한 토스트 라이브러리입니다. 다양한 포지션, 테마, 프로그레스 바, 그리고 확인(컨펌) 기능 등을 제공합니다.

## 무려 공식 문서

https://custom-toast-ts.vercel.app/

## options (목차)

- [React Custom-toast](#react-custom-toast)
  - [무려 공식 문서](#무려-공식-문서)
  - [options (목차)](#options-목차)
  - [message](#message)
  - [time](#time)
  - [position](#position)
  - [progressBar](#progressbar)
  - [style](#style)
  - [confirm](#confirm)
  - [custom style](#custom-style)
  - [Contributors](#contributors)

## message

**예제**

```js
showToast({
  message: "토스트 메시지입니다!",
});
```

토스트에 출력될 메시지를 작성할 수 있습니다.

## time

**예제**

```js
showToast({
  message: "토스트 메시지입니다!",
  time: 1000,
});
```

토스트가 보여질 시간(ms)을 정할 수 있습니다. 지정하지 않을 경우 토스트를 클릭해야 사라집니다.

## position

**예제**

```js
showToast({
  message: "우측 상단에 표시됩니다.",
  position: "top-right",
});
```

`position` 속성을 지정해줄 수 있습니다. `상하-좌우` 순서로 지정해 줄 수 있습니다.

**top**

- right
- center
- left

**center**

- right
- center
- left

**bottom**

- right
- center
- left

## progressBar

**예제**

```js
showToast({
  message: "토스트 메시지입니다!",
  time: 3000,
  showProgress: true,
});
```

프로그래스 바는 토스트 알림이 남은 시간에 따라 표시 됩니다. 기본값은 `false`입니다.

## style

**예제**

```js
showToast({
  theme: "warning",
  bg: true,
});
```

**theme**

- 테마를 지정할 수 있습니다.
- 기본 테마는 `default`입니다.
- 텍스트와, 아이콘 등이 테마에 따라 변경됩니다.
- `default`, `success`, `feed`, `warning`, `error` 테마가 있습니다.

**bg**

- 배경 색을 표시할 수 있습니다.
- 기본 값은 `false`입니다.
- `theme` 속성의 값에 따라 배경 색이 지정됩니다.

## confirm

**예제**

```js
showToast({
  message: "구매하시겠습니까?",
  confirm: (confirm) => {
    console.log("confirm", confirm); /* true or false */
  },
});
```

사용자의 선택을 전달 받을 수 있습니다.
`confirm` 속성을 지정하면 자동으로 사용자에게 선택 폼이 추가된 토스트 알림이 나타납니다.
사용자의 선택이 콜백함수에 전달됩니다. (`true` / `false`)

## custom style

**예제**

```js
showToast({
  message: "이런 것도 된다고?",
  custom: {
    box: {
      background: "#333",
      width: "500px",
      height: "100px",
    },
    font: {
      color: "red",
      fontSize: "40px",
    },
    icon: {
      iconUrl: "example.com",
      width: "48px",
      height: "48px",
    },
    progress: {
      background: "green",
      height: "10px",
    },
  },
});
```

사용자가 스타일을 직접 정의할 수 있습니다. `custom` 객체내에 정의합니다.

**box**

- 토스트 박스에 대한 스타일을 정의합니다.
- `background`, `width`, `height` 등을 지정할 수 있습니다.

**font**

- 메시지(텍스트)에 대한 스타일을 정의합니다.
- `color`, `fontSize` 등을 지정할 수 있습니다.

**icon**

- 아이콘(이미지)에 대한 스타일을 정의합니다.
- `이미지경로`, `width`, `height` 등을 지정할 수 있습니다.

**progress**

- 프로그래스바에 대한 스타일을 정의합니다.
- `background`, `height` 등을 지정할 수 있습니다.

## Contributors

<table>
  <tr>
    <td align="center"><a href='https://github.com/rarrit'><img src="https://avatars.githubusercontent.com/za0012" width="100px" width="100px" /></a></td>
    <td align="center"><a href='https://github.com/LeeJY97'><img src="https://avatars.githubusercontent.com/LeeJY97" width="100px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>김민규</b></td>
    <td align="center"><b>이준열</b></td>
  </tr>
</table>
