import styled from "styled-components"

export const Content = styled.main`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
  @media (max-width: 375px) and (min-height: 670px) {
    height: 88vh;
  }
  .payment_return {
    outline: none;
    border: none;
    background: transparent;
    position: absolute;
    top: 1rem;
    left: 20vw;
    height: 44px;
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (max-width: 600px) {
      top: -1rem;
      left: 1rem;
    }
  }
`

export const Body = styled.section`
  .user_payment {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 290px;
    @media (max-width: 600px) {
      width: 90%;
      margin: auto;
    }
    &__title {
      text-align: left;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }
    &__subtitle {
      text-align: left;
      font-weight: 400;
      font-size: 1rem;
      line-height: 21px;
      letter-spacing: -0.02em;
      margin-bottom: 0.8rem;
    }
    img {
      margin: 0.8rem 0;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    &__form {
      font-family: DM Sans, sans-serif;
      &--row {
        text-align: left;
        margin-bottom: 1rem;
        width: 100%;
        &:nth-child(5) {
          width: 43%;
        }
        &:nth-child(6) {
          width: 43%;
        }
        &:nth-child(10) {
          display: flex;
          flex-direction: column;
        }
        label {
          font-size: 0.688rem;
        }
        select {
          background-color: #ffffff;
          border: 1px solid transparent;
          border-bottom: 1px solid #f5f5f5;
          color: #2e2e2e;
          padding: 0;
          transition: all 0.4s;
          border-radius: 0;
          outline: none;
          padding: 0.5rem 0;
        }
      }
      &--button {
        margin: auto;
        margin-top: 2rem;
        background: #181a44;
        border-radius: 25px;
        height: 50px;
        padding: 0.5rem;
        font-size: 0.875rem;
        width: 90%;
        color: white;
        outline: none;
        transition: all 0.3s;
        outline: none;
        border: none;
        cursor: pointer;
        &:hover,
        &:active,
        &:focus {
          transition: all 0.3s;
          color: white;
          background: #191847;
          outline: none;
          border-color: transparent;
        }
      }
    }
  }
`
