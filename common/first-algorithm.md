# SNS 친구 추천 시스템

## 문제 설명
SNS에서 친구 추천 시스템을 구현하려고 합니다. 각 사용자의 친구 관계가 그래프 형태로 주어질 때, 특정 사용자에게 **직접 친구가 아닌 사용자들**을 추천하는 함수를 작성하세요. 이 함수는 **모든 연결 거리의 친구의 친구들**을 탐색하며, 직접 친구를 제외한 사용자들을 추천 목록에 포함합니다.

## 요구사항

- 친구 관계는 인접 리스트 형태의 객체로 주어집니다. 예를 들어, 아래와 같은 형식입니다:
    
    ```jsx
    const network = {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Charlie"]
    };
    ```
    
- 특정 사용자의 **직접 친구가 아닌 모든 연결 거리의 친구들**을 추천합니다.
- **친구 관계는 양방향**입니다. 즉, 인스타그램의 팔로우 시스템과 같은 단방향 관계를 허용하는 SNS가 아닙니다.
- **중복 추천을 방지**하기 위해, 각 사용자는 추천 목록에 한 번만 포함됩니다.
- 두 번째 매개변수로 주어지는 사용자는 **`network` 객체 내에 존재하는 사용자**라고 가정합니다.

## 함수 정의

```jsx
function friendRecommendations(network, user) {
  // 구현부
}

```

## 입출력 예시

```jsx
const network = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "David"],
  Charlie: ["Alice", "Eve"],
  David: ["Bob"],
  Eve: ["Charlie"]
};
console.log(friendRecommendations(network, "Alice")); 
// 출력: ["David", "Eve"]
```

## 입출력 예시 설명

- Alice의 직접 친구는 ["Bob", "Charlie"]입니다.
- 첫 번째 탐색 거리에서 Alice의 친구 Bob과 Charlie의 친구 목록을 확인합니다.
- Bob의 친구는 ["Alice", "David"]입니다.
- Charlie의 친구는 ["Alice", "Eve"]입니다.
- 이 중에서 Alice의 직접 친구가 아닌 친구들인 "David"와 "Eve"가 추천 목록에 추가됩니다.
- "David"와 "Eve"는 Alice의 직접 친구가 아니면서 연결된 친구이므로, 최종 추천 목록에 포함되어 출력됩니다.

## 제출

`friendRecommendations` 함수를 완성하여 제출해주시면 됩니다.
