import { useState, useEffect, useRef } from 'react'

export default function useCount (callBack:(params:any)=>void,defaultDelay:number = 60) {
   const timeref = useRef<number>(0)
   const [count, useCount] = useState<number>(0)
   const [flag, useFlag] = useState<boolean>(true) //处理节流
   const [timeText, usetext] = useState<string>('获取验证码')
   useEffect(() => {
    return () => { clearInterval(timeref.current) } //清除
   }, [])
   useEffect(() => {
    if (count === 0) {
      useFlag(true) //当定时器结束的时候开启阀门
      clearInterval(timeref.current)
      usetext('获取验证码')
    } else {
      usetext(count + 's后获取验证码')
    }
   }, [count])
   const start = (params:any) => {
      if (!flag) return clearInterval(timeref.current) //如果是false 直接关闭 否则 开启阀门
      callBack(params)
      useCount(count=>count || defaultDelay)
      timeref.current = window.setInterval(() => {
        useCount((count) => count - 1)
      }, 1000)
   }

   return { start, count, timeText }
}
