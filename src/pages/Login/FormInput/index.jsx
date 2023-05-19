/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import styles from './FormInput.module.scss';

const PasswordIcon = ({ type, handleChangePassword, handleChangeText }) => (
  <>
    {type === 'password' ? (
      <AiOutlineEyeInvisible
        cursor='pointer'
        onClick={handleChangeText}
        size={20}
      />
    ) : (
      <AiOutlineEye
        cursor='pointer'
        onClick={handleChangePassword}
        size={20}
      />
    )}
  </>
);

export const FormInput = ({
  title,
  name,
  type,
  handleChange,
  handleBlur,
  value,
  errors,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleChangePassword = () => {
    setInputType('password');
  };

  const handleChangeText = () => {
    setInputType('text');
  };

  return (
    <div className={styles.Paragraph}>
      <span className={styles.Title}>{title}</span>
      <div className={styles.Wrapper}>
        <input
          type={inputType}
          name={name}
          autoComplete='off'
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          className={styles.Input}
        />
        {type === 'password' && (
          <PasswordIcon
            type={inputType}
            handleChangePassword={handleChangePassword}
            handleChangeText={handleChangeText}
          />
        )}
      </div>
      <span className={styles.Err}>&nbsp;{errors}</span>
    </div>
  );
};
