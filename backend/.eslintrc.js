module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // tsconfig.json 파일을 통해 타입 정보 확인
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended', // eslint 기본 권장 설정
    'plugin:@typescript-eslint/recommended', // @typescript-eslint 권장 설정
    'plugin:prettier/recommended', // prettier 규칙 적용
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'], // 사용하지 않는 변수 경고
    '@typescript-eslint/explicit-function-return-type': 'error', // 모든 함수에 반환 타입 명시하도록 강제
    '@typescript-eslint/no-explicit-any': 'error', // 'any' 타입 사용을 금지
    'prettier/prettier': ['error'], // Prettier 규칙을 에러로 처리
    'max-len': ['error', { code: 150 }], // 한 줄의 최대 길이를 150으로 설정 (TSLint 규칙 대응)
    'quotes': ['error', 'single'], // 따옴표는 single quote로 설정
    'no-console': ['warn'], // console.log() 경고 처리
    'no-debugger': ['warn'], // debugger 경고 처리
    'semi': ['error', 'always'], // 세미콜론을 항상 사용하도록 설정
    '@typescript-eslint/member-ordering': ['error', { default: ['public-static-methods', 'protected-static-methods', 'public-instance-methods', 'protected-instance-methods', 'private-instance-methods'] }], // 클래스 내부 메서드 순서 설정
  },
};