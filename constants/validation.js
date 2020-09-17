import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});

export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required().min(4).max(10),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});
