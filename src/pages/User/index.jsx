import Button from '@comp/UI/Button';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../redux/features/authSlice';
import styles from './User.module.scss';

const User = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLogout());
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <Button onClick={handleClick}>Выйти</Button>
      </div>
    </div>
  );
};
export default User;
