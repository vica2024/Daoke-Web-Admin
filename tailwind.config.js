/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,js,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
        spinSlow: 'spin 5s linear infinite',
        spinFast: 'spin 1s linear infinite',
        spinSlower: 'spin 10s linear infinite',
        spinReverseSlower: 'spin-reverse 5s linear infinite', // 自定义反向慢速旋转动画
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
