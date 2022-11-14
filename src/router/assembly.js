import React from 'react'
import Loadable from '@@/Loadable'
const Home = Loadable(() => import('@/pages/home'))
const Form = Loadable(() => import('@/pages/form'))
const Spin = Loadable(() => import('@/pages/spin'))
const Modal = Loadable(() => import('@/pages/modal'))
const Com = Loadable(() => import('@/pages/com'))
export {
  Home,
  Form,
  Spin,
  Modal,
  Com
}
