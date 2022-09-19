import React, { useEffect } from 'react'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ExampleProps } from './Example.types'
import { LoadingActions } from '../../store/loading/types'
import { RootState } from '../../store'
import { addLoadingId } from '../../store/loading/actions'
import { devLog } from '../../utils/helpers'

type ReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Example = ({ addLoadingId, loadingIds, msg }: ExampleProps & ReduxProps) => {
  useEffect(() => {
    addLoadingId('Example')
  }, [])

  useEffect(() => {
    devLog('success', 'Example', loadingIds.join(', '))
  }, [loadingIds])

  return <div>{msg}</div>
}

const mapStateToProps = ({ loadingIds }: RootState) => {
  return { loadingIds }
}

const mapDispatchToProps = (dispatch: Dispatch<LoadingActions>) =>
  bindActionCreators(
    {
      addLoadingId,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(Example)
