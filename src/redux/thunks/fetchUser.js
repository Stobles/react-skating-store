import { auth, db } from '@configs/firebase.config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import {
  setUserSuccess,
  setUserGoogleSuccess,
} from '../features/authSlice';
import { setResponse } from '../features/errorSlice';

export const fetchUserRegistration = ({ firstName, lastName, email, password }) => async (dispatch) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, {
      displayName: `${firstName} ${lastName}`,
    });
    await setDoc(doc(db, 'basket', res.user.uid), {
      products: [],
    });
    dispatch(setResponse({ status: 200, message: 'Регистрация успешна!' }));
    return res;
  } catch (e) {
    dispatch(setResponse({ status: e.code, message: e.message }));
  }
};

export const fetchUserLogin = ({ email, password }) => async (dispatch) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(
      setUserSuccess({
        id: user.uid,
        email: user.email,
        name: user.displayName,
      }),
    );
    dispatch(setResponse({ status: 200, code: 'Login success' }));
  } catch (e) {
    dispatch(setResponse({ status: e.code, message: e.message }));
  }
};

export const fetchUserLoginWithGoogle = () => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential.accessToken;
    const { user } = res;

    const docRef = doc(db, 'basket', user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(doc(db, 'basket', user.uid), {
        products: [],
      });
    }
    dispatch(
      setUserGoogleSuccess({
        token,
        user: { id: user.uid, email: user.email, name: user.displayName },
      }),
    );
    dispatch(setResponse({ status: 200, message: 'Google login success' }));
  } catch (e) {
    dispatch(setResponse({ status: e.code, message: e.message }));
  }
};
