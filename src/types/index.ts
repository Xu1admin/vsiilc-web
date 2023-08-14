import React from 'react';

/** 任意类型的object */ 
export interface IAnyObject {
  [propName: string]: any;
}

/** 确认弹窗数据类型 */ 
export interface ITableConfirm {
  visible: boolean;
  loading: boolean;
  type?: number;
  title?: string;
  [propName: string]: any;
}


/** 自定义分页hooks useTableList 的类型 */ 
export interface ITableHook<TList,A> {
  setParams:React.Dispatch<React.SetStateAction<A>>;
  list: TList[];
  loading: boolean;
  setList: React.Dispatch<React.SetStateAction<any>>;
  pagination: {current:number;pageSize:number;total:number};
  params: any;
}

/** 后端接口 Response返回 */ 
export interface IResult {
  resultCode: number;
  data: any;
  resultMessage: string;
  resultDesc: string;
  timestamp	: number;
}

/** table数据类型 */ 
export interface TableData {
  data: any[];
  pagination: {current:number,pageSize:number,total:number},
  loading: boolean
}

/** reducer响应action类型 */ 
export interface actionProps {
  type: string;
  payload: any;
}
