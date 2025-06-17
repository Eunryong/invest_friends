import subprocess
import os

# Step 1: NestJS 프로젝트 기본 골격 생성
subprocess.run(['pnpm', 'dlx', 'create-nestjs-app', 'backend'], check=True)

# Step 2: 프로젝트 디렉토리로 이동
project_dir = os.path.join(os.getcwd(), 'backend')

# Step 3: ESLint 설정 파일 작성
eslint_config = """
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error'],
  },
};
"""
with open(os.path.join(project_dir, '.eslintrc.js'), 'w') as f:
    f.write(eslint_config)

# Step 4: Prettier 설정 파일 작성
prettier_config = """
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "printWidth": 100,
  "tabWidth": 2,
  "endOfLine": "lf"
}
"""
with open(os.path.join(project_dir, '.prettierrc'), 'w') as f:
    f.write(prettier_config)

# Step 5: package.json 수정
package_json_path = os.path.join(project_dir, 'package.json')

# 기존 package.json을 읽어오기
import json
with open(package_json_path, 'r') as f:
    package_json = json.load(f)

# 필요한 스크립트 추가
package_json['scripts'].update({
    'lint': 'eslint src --ext .ts',
    'format': 'prettier --write .',
    'format:check': 'prettier --check .'
})

# 업데이트된 package.json 저장
with open(package_json_path, 'w') as f:
    json.dump(package_json, f, indent=2)

# Step 6: pnpm install 실행
subprocess.run(['pnpm', 'install'], cwd=project_dir, check=True)

print("NestJS 프로젝트 생성 및 ESLint, Prettier 설정이 완료되었습니다.")
