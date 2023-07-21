// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import { TinyColor, mostReadable } from '@ctrl/tinycolor';


const theme = {
  colors: {
    base: '#424245',
    primary: '#fafafa',
    secondary: '#8370FF',
  }
}

const getButtonColors = (color: string) => {
  const background = new TinyColor(color)
  const text = mostReadable(color, ['#000', '#fff']).toHexString()
  const backgroundHovered = new TinyColor(color).darken().toString()
  const textHovered = mostReadable(backgroundHovered, ['#000', '#fff']).toHexString()
  return {
    background,
    text,
    backgroundHovered,
    textHovered,
  }
}

const primaryDarked = new TinyColor('#fafafa').darken().toString(); // '#cc0000'
const colorText = mostReadable('#fafafa', ['#000', '#fff']).toHexString(); // "#00ff00"

console.log(primaryDarked);


export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Noto Sans',
      },
    }),
  ],
  shortcuts: [
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-300 text-${c}-800 hover:bg-${c}-500 hover:text-${c}-900 py-2 px-4 rounded-4px`],
  ],
  theme: {
    colors: {
      primary: primaryDarked,
      secondary: '#8370FF',
      control: '#424245',
      input: '#00030A',
      bgPrimary: '#08080B',
      bgSecondary: '#1D1F22',
      text: colorText,
      textFade: '#79797B'
    }
  }
})