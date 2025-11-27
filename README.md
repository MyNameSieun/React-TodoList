# 📂 Branch Overview

> 상태 관리 방식과 렌더링 최적화 기법을 브랜치 단위로 분리해 비교할 수 있도록 구성하였다.

| Branch Name        | Description                                     |
| ------------------ | ----------------------------------------------- |
| **layout**         | 기본 레이아웃 구성 (initial layout structure)   |
| **props-drilling** | props drilling 방식으로 상태 전달               |
| **useReducer**     | `useReducer`를 활용한 상태 관리                 |
| **useMemo**        | `useMemo`만 적용한 값 메모이제이션 최적화       |
| **react-memo**     | `React.memo`만 적용한 컴포넌트 렌더링 최적화    |
| **useCallback**    | `useCallback`만 적용한 함수 메모이제이션 최적화 |

# 🔀 브랜치 전환 / 브랜치 클론 방법

## ① 레포 전체 클론 후 브랜치 이동

```shell
git clone https://github.com/MyNameSieun/React-TodoList.git .
git branch -a
git checkout <브랜치명>
```

## ② 특정 브랜치만 바로 선택해서 클론

```shell
git clone -b <브랜치명> https://github.com/MyNameSieun/React-TodoList.git .
```
