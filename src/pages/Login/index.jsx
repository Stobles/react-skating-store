import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import * as yup from 'yup';

import Image from '@comp/UI/Image';
import { loginImage } from '@assets';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@comp/UI/Button';
import {
  fetchUserRegistration,
  fetchUserLogin,
  fetchUserLoginWithGoogle,
} from '@thunks/fetchUser';
import { useToastifyMessage } from '@hooks/useToastifyMessage';
import { fetchAllBasket } from '@thunks/fetchBasket';
import styles from './Login.module.scss';
import { FormInput } from '../../components/UI/FormInput';

const registerSchema = yup.object().shape({
  firstName: yup.string().required('Введите значение'),
  lastName: yup.string().required('Введите значение'),
  email: yup.string().email('Неправильный E-mail').required('Введите значение'),
  password: yup
    .string()
    .required('Введите значение')
    .min(8, 'Пароль слишком короткий - должен содержать 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль должен состоять из латинских букв.'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('Неправильный E-mail').required('Введите значение'),
  password: yup
    .string()
    .required('Введите значение')
    .min(8, 'Пароль слишком короткий - должен содержать 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль должен состоять из латинских букв.'),
});

const initialValuesRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const initialValuesLogin = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [pageType, setPageType] = useState('register');
  const navigate = useNavigate();
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const register = async (values, onSubmitProps) => {
    const res = await dispatch(fetchUserRegistration(values));
    onSubmitProps.resetForm();
    if (res) {
      setPageType('login');
    }
  };
  const login = async (values) => {
    dispatch(fetchUserLogin(values));
  };

  const handleBackwardClick = () => {
    navigate('/');
  };

  const handleGoogleLogin = async () => {
    dispatch(fetchUserLoginWithGoogle());
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values);
    if (isRegister) await register(values, onSubmitProps);
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchAllBasket(user.id));
      navigate('/');
    }
  }, [user]);

  useToastifyMessage();

  return (
    <div className={styles.Login}>
      <div className={styles.FormWrapper}>
        <div className={styles.Form}>
          <h2 className={styles.Title}>
            {isLogin ? 'Войдите в свой аккаунт' : 'Зарегистрируйте аккаунт'}
          </h2>
          <button
            type='button'
            className={styles.Button}
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={27} />
            <span>Войти с помощью Google</span>
          </button>
          <div className={styles.Separator}>
            <span className={styles.SeparatorText}>или</span>
          </div>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                {isRegister && (
                  <>
                    <FormInput
                      title='Имя'
                      name='firstName'
                      type='text'
                      value={values.firstName}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      errors={Boolean(touched.firstName) && errors.firstName}
                    />
                    <FormInput
                      title='Фамилия'
                      name='lastName'
                      type='text'
                      value={values.lastName}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      errors={Boolean(touched.lastName) && errors.lastName}
                    />
                  </>
                )}
                <FormInput
                  title='Email'
                  name='email'
                  type='email'
                  value={values.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  errors={Boolean(touched.email) && errors.email}
                />
                <FormInput
                  title='Пароль'
                  name='password'
                  type='password'
                  value={values.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  errors={Boolean(touched.password) && errors.password}
                />
                <div className={styles.Buttons}>
                  <Button isSubmit isFull>
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                  </Button>
                  <Button isFull isReverse onClick={handleBackwardClick}>
                    Назад
                  </Button>
                </div>
              </form>
            )}
          </Formik>

          <div className={styles.Question}>
            <span>{isLogin ? 'Еще нет аккаунта?' : 'Есть аккаунт?'}</span>
            <button
              className={styles.ChangeButton}
              type='button'
              aria-label='Change page type'
              onClick={() => setPageType(isLogin ? 'register' : 'login')}
            >
              {isLogin ? 'Создать' : 'Войти'}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.Image}>
        <Image src={loginImage} alt='login_image' />
      </div>
    </div>
  );
};
export default Login;
