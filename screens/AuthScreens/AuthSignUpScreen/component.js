//@flow
import React from 'react';
import { Formik } from 'formik';
import { View, Image, KeyboardAvoidingView } from 'react-native';

import { SignUpSchema } from 'constants/validation';

import { Text } from 'components/Text';
import { Button, BackButton, ConnectButton } from 'components/Button';
import ScreenLayout from 'components/ScreenLayout';
import { Input } from 'components/Input';
import { DismissKeyboardView } from 'components/DismissKeyboard';

import styles from './styles';

type Props = {};

const AuthSignUpScreen = (props: Props) => (
  <ScreenLayout>
    <View style={styles.buttonsContainerStyle}>
      <BackButton navigation={props.navigation} />
    </View>
    <Image
      source={require('assets/images/Auth/BackgroundLines.png')}
      style={styles.backgroundLinesStyle}
    />

    <View style={styles.bodyContainerStyle}>
      <Text size="sz28" weight="heavy" align="center" style={styles.titleStyle}>
        Create your account
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
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={SignUpSchema}
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
                  name="username"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  placeholder="Your name"
                  errors={errors}
                  touched={touched}
                  style={styles.emailContainerStyle}
                />

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
                  onPress={() =>
                    props.navigation.navigate(props.route.params.welcome)
                  }
                  title="get started"
                  style={styles.submitButtonStyle}
                />
              </View>
            )}
          </Formik>
        </View>
      </DismissKeyboardView>
    </KeyboardAvoidingView>
  </ScreenLayout>
);

export default AuthSignUpScreen;
