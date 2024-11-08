# 비어있나요?
## 문제 설명
프론트엔드 개발자 A는 어느날 서비스에 에러가 난 것을 목격했습니다.  

서버에서 가끔 빈 값에 대한 처리를 `null`이 아닌 다른 값으로 처리해 넘겨주어서, 기존에 사용하고 있던 `isEmpty()` 함수에서 에러가 발생했습니다.  
개발자 A는 백엔드 개발자에게 조언을 구했고 요구사항에 따라 개발한다면 문제 없을 것이란 답변을 받았습니다.

요구사항에 맞게 **주어진 값이 비어있는지 확인 하는 함수**를 작성해주세요.  

## 요구사항

- 객체의 모든 속성 값이 비어있거나, 속성 자체가 없으면 비어있다고 간주합니다.  
- 배열의 모든 요소가 비어있으면 비어있다고 간주합니다.  
- 원시 타입은 비어있지 않다고 간주합니다.  
- 빈 문자열은 비어있다고 간주합니다.  
- `null`과 `undefined`는 비어있다고 간주합니다.
  - `null`과 `undefined`를 제외한 falsey value는 비어있지 않습니다. 비어있는 경우에만 `true`를 반환하고, 그외에는 `false`를 반환하세요.  

## 함수 정의

```jsx
function isEmpty(value) {
  // 구현부
}
```

## 입출력 예시

```jsx
isEmpty(null) // 출력: true
isEmpty({}) // 출력: true
isEmpty(0) // 출력: false
isEmpty(false) // 출력: false
isEmpty([{}, {a:[]}]) // 출력: true
isEmpty({a: null, b: ''}) // 출력: true
```
