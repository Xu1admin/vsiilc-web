const week:string[] = ['周一','周二','周三','周四','周五','周六','周天']
const dateText:any = {'q1/2h':'半小时',qh:'一小时',q2h:'两小时',q3h:'三小时',q4h:'四小时',q6h:'六小时',q8h:'八小时',q12h:'十二小时'}

export const sliderFormat = (type:string, value:number, key?:string) => {
  let string = '',hour=null
  if(type=='day') {
    value = value*5
    string += Math.floor(value/60)<10?"0"+Math.floor(value/60): Math.floor(value/60)
    string += ':'
    string += value%60<10?"0"+value%60:value%60
  } else if(type=='week'){
    hour = Math.floor(value%(1440/30))*30
    string = week[Math.floor(value/(1440/30))]
    string += Math.floor(hour/60)<10?"0"+Math.floor(hour/60): Math.floor(hour/60)
    string += ':'
    string += hour%60<10?"0"+hour%60:hour%60
  } else {
    string = '隔' + dateText[key!] + '提醒'
  }
  return string
}

export const textControl = (defaultState:any) => {
  const {defaultDate,defaultTime,type,timeStep} = defaultState
  let str = '',key = 0
  if(type=='time') {
    const date = defaultDate.format('HH')
    if(date>=23||date<=7) {
      str += '有提醒时间为晚上23点至早上7点'
    } else {
      str = ''
    }
  } else {
    const blo = defaultTime?.some((item:number) => {
      key = item
      if(type=='week') key = Math.floor(item%(1440/timeStep))
      if(key*timeStep<=420||key*timeStep>=1380) {
        return true
      }
    })
    if(blo) {
      str += '有提醒时间为晚上23点至早上7点'
    } else {
      str = ''
    }
  }
  return str
}

/**
 * @description: 根据传入的字典列表进行翻译
 * @params option :传入的字典数据，必须
 * @params value : 要匹配的数据
 * @params key :   要翻译的字段
 * @return ( String )
 */
export const dictByText = (option:any,value:string|number,key='text') => {
  const bool = typeof value == 'number'? true : typeof value == 'string' ? value != '' : false
  if(option?.length>0 && bool){
    const keyItem = option.find((item:any) => item.value==value)
    return keyItem[key]
  } else {
    return ''
  }
}

// 根据传入的key获取对应类型类型
export const textType = (key:string) => {
  let typeList:any = {
    '0': '待处理',
    '1': '进行中',
    '2': '已完成'
  }
  return typeList[key] || ''
}