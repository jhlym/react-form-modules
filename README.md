> react-hook-form 라이브러리를 사용한 후기를 정리 해봤습니다.

# 참고

- [react-hook-form 공식 문서](https://react-hook-form.com/)
- [react-hook-form Github 주소](https://github.com/react-hook-form/react-hook-form)

# 후기

- `react-hook-form`은 기본적으로 react의 `ref`를 이용합니다.
- validation check 로직은 react-hook-form을 이용하고
- UI 단은 손쉽게 커스터마이징 해서 사용이 가능합니다.
- next.js와 결합에 문제가 없는지 확인이 필요합니다.
  - 이건 회사 프로젝트에서 제대로 돌아가는지 먼저 확인이 필요합니다.
- 외부 UI 라이브러리와도 유연성을 가집니다.
  - `material-UI`, `AntD`, `React-Select` 등등...
  - 외부 라이브러리의 제어권을 가져와서, 로직을 커스터마이징 할 수 있습니다.
  - react-hook-form에서 제공하는 `Controller` 참조 바랍니다.
