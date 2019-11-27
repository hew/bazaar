import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Auth } from '../../../utils/amplify-client.js';
import { Box, Text, Input, Button, Loading } from '../theme';
import { useMachineValue } from '../machines';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email('You must provide an email'),
  password: Yup.string().required('Please provide a password'),
});

export default ({ navigation }) => {
  const [{ value }, send] = useMachineValue();

  return (
    <Formik
      initialValues={
        process.env.NODE_ENV === 'development'
          ? { email: 'john@test.com', password: 'abcdeA1!@fghijkl' }
          : { email: '', password: '' }
      }
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const signInResult = await Auth.signIn({
          username: values.email,
          password: values.password,
        }).catch(err => {
          console.log('err', err);
          setSubmitting(false);
          setErrors({ network: err.message });
        });

        setSubmitting(false);
      }}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting, isValidating }) => (
        <Box width="100%" maxWidth={260} alignItems="center" backgroundColor="transparent">
          <Text mt={3} mb={2}>
            Email
          </Text>
          <Input
            bg="opaque"
            color="textWhite"
            placeholder=""
            placeholderTextColor="white"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Text mt={3} mb={2}>
            Password
          </Text>
          <Input
            bg="opaque"
            color="textWhite"
            secureTextEntry
            placeholder=""
            placeholderTextColor="white"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button mt={3} onPress={handleSubmit} title="LOG IN" />
        </Box>
      )}
    </Formik>
  );
};
