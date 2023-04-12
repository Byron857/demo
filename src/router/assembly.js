import React from 'react'
import Loadable from '@@/Loadable'
const Home = Loadable(() => import('@/pages/Home'))
const About = Loadable(() => import('@/pages/About'))
const Com = Loadable(() => import('@/pages/Com'))
export {
  Home,
  About,
  Com
}
