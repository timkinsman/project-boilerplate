import { useEffect } from 'react'
import { ExampleProps } from './Example.types'
import { devLog } from '../../utils/helpers'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { addLoadingId } from '../../store/loading'

export const Example = ({ msg }: ExampleProps) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.loading)

  useEffect(() => {
    dispatch(addLoadingId('Example'))
  }, [])

  useEffect(() => {
    devLog('success', 'Example', loading.ids.join(', '))
  }, [loading.ids])

  return <div>{msg}</div>
}
