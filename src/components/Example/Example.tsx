import { useEffect } from 'react';
import { addLoadingId } from '../../store/loading';
import { devLog } from '../../utils/helpers';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { ExampleProps } from './Example.types';

export const Example = ({ msg }: ExampleProps) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading);

  useEffect(() => {
    dispatch(addLoadingId('Example'));
  }, []);

  useEffect(() => {
    devLog('success', 'Example', loading.ids.join(', '));
  }, [loading.ids]);

  return <div>{msg}</div>;
};
