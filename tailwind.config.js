/*
 * @Author: dushuai
 * @Date: 2023-12-04 17:55:41
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-04 14:16:34
 * @description: tailwind
 */
/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * 生成颜色css变量名
 * @param {string} brandName 
 * @returns 
 */
function genSimilarColorsName(brandName) {
  return {
    lighter: `var(--ds-${brandName}-lighter-color)`,
    light: `var(--ds-${brandName}-light-color)`,
    DEFAULT: `var(--ds-${brandName}-color)`,
    deep: `var(--ds-${brandName}-deep-color)`,
    deeper: `var(--ds-${brandName}-deeper-color)`
  };
}

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './src/components/**/*.{js,jsx,ts,tsx,vue}',
    './src/components/*.{js,jsx,ts,tsx,vue}',
    './src/pages/**/*.{js,jsx,ts,tsx,vue}',
    './src/pages/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/*.{js,jsx,ts,tsx,vue}',
    './app.vue',
    './src/assets/**/*.scss',
    './src/assets/**/*.css',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      // fontFamily: {
      //   sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      // },
      // textColor: {
      //   primary: '#1D2129',
      //   regular: '#4E5969',
      //   secondary: 'red',
      //   disabled: '#C9CDD4',
      // },
      // backgroundColor: {
      //   primary: 'red',
      //   secondary: '#EBEDF0',
      // }
      // },
      /**
       * 配置colors相当于重写tailwind的主题色
       */
      // colors: {
      //   white: '#ffffff',
      //   black: '#000000',
      //   transparent: 'transparent',
      //   // 使用主题配置css变量
      //   primary: genSimilarColorsName('primary'),
      //   info: genSimilarColorsName('info'),
      //   success: genSimilarColorsName('success'),
      //   warning: genSimilarColorsName('warning'),
      //   danger: genSimilarColorsName('danger')
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

