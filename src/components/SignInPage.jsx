import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSignInPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`

export default function SignInPage({ signInWithGoogle }) {
  return (
    <StyledSignInPage>
      <button onClick={signInWithGoogle}>Continue with Google</button>
      <small>Your data won't be shared with anyone.</small>
    </StyledSignInPage>
  )
}

SignInPage.propTypes = {
  signInWithGoogle: PropTypes.func.isRequired,
}
