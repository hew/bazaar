import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Auth } from '../aws/amplify';
import { Box, Text, Input, Button, Loading } from '../theme';
import { useMachineValue } from '../machines';
import { loginValidationSchema } from './FormUtils';

export const renderFormLoading = ({ isValidating, isSubmitting, machine }, el, loading) => {
  if (machine === 'syncing') return loading;
  if (!isValidating && isSubmitting) return loading;

  return el;
};

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

        if (signInResult && signInResult.username) {
          send('LOGIN', { id: signInResult.username });
        }

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
          {/* 
             A little convoluted, but basically just hides the buttons when the form, or the app machine is doing some work 
             Also displays network errors. This could surely be implemented better lol.
          */}
          {renderFormLoading(
            { isValidating, isSubmitting, machine: value },
            <>
              <Button mt={3} onPress={handleSubmit} title="LOG IN" />
              <Button
                mt={3}
                onPress={() => {
                  navigation.navigate('player');
                }}
                title="SIGN UP"
              />
              {errors && errors.network && (
                <Box py={2}>
                  <Text fontSize={2}>{errors.network}</Text>
                </Box>
              )}
            </>,
            <Box alignItems="center">
              <Loading />
            </Box>,
          )}
        </Box>
      )}
    </Formik>
  );
};
