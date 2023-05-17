module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ? webpack이 module을 찾는방법
// webpack은 확장자를 명시하지 않으면 resolve.extensions 배열 내에서 확장자를 대입해서 찾아봄
// resolve.extensions 의 기본값은 ['.js', '.json', '.wasm']이므로 wabpack은 순서대로 대입해서 찾아보고 없으면 module이 없다고 판단하여 module not found 에러를 반환함
// !우리는 이 문제에 대해 resolve.extensions를 사용하여 기본 배열을 재 정의 할 수 있음 (재정의 해 줄 경우, 기본 확장자를 사용하여 모듈을 해석 하지 않음)
/*
  module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  //...
};
*/