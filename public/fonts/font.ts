import localFont from '@next/font/local'
import { Outfit } from 'next/font/google';

export const IstokRegular = localFont({
    src: [
      {
        path: '../../public/fonts/Istok-Regular.ttf',
        weight:'300'
        },
    ],
    variable: '--font-ıstok'
  })

  
export const ıstok_bold = localFont({
    src: [
      {
        path: '../../public/fonts/Istok-Bold.ttf',
        weight:'500'
        },
    ],
    variable: '--font-ıstok'
  })

  export const outfit = localFont({
    src: [
      {
        path: './Outfit-Regular.ttf',
        weight:'500',
        },
        
    ],
  display:"swap",

    variable: '--font-outfit'
  })