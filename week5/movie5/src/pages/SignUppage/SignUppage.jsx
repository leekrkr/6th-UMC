import React from 'react';
import {
    SignupContainer,
    SignupTitle,
    SignupForm,
    Fullname,
    Email,
    Age,
    Password,
    PasswordConfirm,
    Submit
  
  } from './SignupStyle';

export default function SignUppage() {

    return(
        <SignupContainer>
            <SignupTitle>회원가입 페이지</SignupTitle>
            <SignupForm>
                <Fullname  type="text" placeholder=" 이름을 입력해주세요"/>
                <Email  type="text" placeholder=" 이메일을 입력해주세요" />
                <Age  type="text"  placeholder=" 나이를 입력해주세요"/>
                <Password  type="text"  placeholder=" 비밀번호를 입력해주세요"/>
                <PasswordConfirm  type="text"  placeholder=" 비밀번호 확인" />
                <Submit type="button">제출하기</Submit>
            </SignupForm>
        </SignupContainer>
    );
}