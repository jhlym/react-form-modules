> redux-form 라이브러리 사용 후기를 작성 해보았습니다.

# 참조

- [Github 주소](https://github.com/redux-form/redux-form)
- [공식 문서](https://redux-form.com/8.1.0/)
- [예제 소스](https://codesandbox.io/s/react-form-demo-950ww)

# 후기

- 기본적으로 `HOC`을 이용하기 때문에, 컴포넌트 `depth`가 커져 프로젝트가 복잡해질 수록 불리하다.
- input에 입력할때마다 `dispatch`가 일어나기 때문에, `redux` 사용이 커질수록 state 관리에 유의해야 한다.
- `HOC` 패턴과 `redux`에 직접 접근하는 것이 위험요소가 크다.
