import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setResponse } from '../redux/features/errorSlice';

export const useToastifyMessage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.error);
  useEffect(() => {
    switch (status) {
      case 'auth/email-already-in-use':
        toast.error(message);
        dispatch(setResponse({ status: null, message: '' }));
        break;
      case 200:
        toast.success(message);
        dispatch(setResponse({ status: null, message: '' }));
        break;
      default:
        break;
    }
  }, [message]);
};
