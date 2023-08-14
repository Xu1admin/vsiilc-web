import { useState, useEffect, useRef } from 'react'
import { useRequest } from 'ahooks'
import { IResult, IAnyObject, ITableHook } from '@/types'

// 自定义翻页请求hooks
export default  function useTableList<T,A>(api:(params:A) => Promise<IResult>, initialParams:A):ITableHook<T,A> {
  // 接口参数
  const [params, setParams] = useState<A>(initialParams);
  // 数据
  const [list, setList] = useState<T[]>([]);
  // 分页参数
  const [pagination, setpagination] = useState({current: 1,pageSize: 10,total:0});

  // 采用参数合并的方式
  const { run:getTable, loading } = useRequest(async (param) => api(param),{
    manual: true,
    onSuccess: (result, params) => {
      setList(result.data.list)
      setpagination({
        current: result.data.current,
        pageSize: result.data.size,
        total: result.data.total
      })
    }
  });

  useEffect(() => {
    getTable(params);
  } ,[params])

  return { setParams, list, setList, loading, pagination, params };
}
