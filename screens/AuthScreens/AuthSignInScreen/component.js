//@flow
import React from 'react';
import { Formik } from 'formik';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { SignInSchema } from 'constants/validation';

import { Text } from 'components/Text';
import { Button, BackButton, ConnectButton } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';
import { Input } from 'components/Input';
import { DismissKeyboardView } from 'components/DismissKeyboard';

import styles from './styles';

type Props = {};

const AuthSignInScreen = (props: Props) => (
  <ScreenLayout>
    <BackButton navigation={props.navigation} />
    <Image
      source={require('assets/images/Auth/BackgroundLines.png')}
      style={styles.backgroundLinesStyle}
    />

    <View style={styles.bodyContainerStyle}>
      <Text size="sz28" weight="heavy" align="center" style={styles.titleStyle}>
        Welcome Back!
      </Text>
      <ConnectButton
        connectType="facebook"
        style={styles.connectButtonContainerStyle}
      />
      <ConnectButton connectType="google" />
    </View>

    <Text
      size="sz14"
      weight="heavy"
      color="gray"
      transform="uppercase"
      align="center"
      style={styles.subtitleTextStyle}
    >
      log in with email
    </Text>
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <DismissKeyboardView>
        <View style={styles.formContainerStyle}>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={SignInSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Input
                  name="email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  placeholder="Email address"
                  errors={errors}
                  touched={touched}
                  style={styles.emailContainerStyle}
                />

                <Input
                  name="password"
                  secureTextEntry={true}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  placeholder="Password"
                  errors={errors}
                  touched={touched}
                  style={styles.passwordContainerStyle}
                />

                <Button
                  onPress={handleSubmit}
                  title="log in"
                  style={styles.submitButtonStyle}
                />

                <TouchableWithoutFeedback>
                  <Text size="sz14" weight="medium" align="center">
                    Forgot Password?
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            )}
          </Formik>
        </View>
      </DismissKeyboardView>
    </KeyboardAvoidingView>
    <View style={styles.forgotContainerStyle}>
      <Text size="sz14" weight="medium" color="gray">
        ALREADY HAVE AN ACCOUNT?
      </Text>
      <TouchableWithoutFeedback
        onPress={() =>
          props.navigation.navigate(props.route.params.auth_signup)
        }
      >
        <Text size="sz14" weight="medium" color="accent">
          {' '}
          SIGN UP
        </Text>
      </TouchableWithoutFeedback>
    </View>
  </ScreenLayout>
);

export default AuthSignInScreen;
