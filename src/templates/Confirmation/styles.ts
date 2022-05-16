import styled from "styled-components"

export const Content = styled.main`
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 88vh;
  max-width: var(--container);
  margin: auto;
  position: relative;
`

export const Loading = styled.main`
  height: 88vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  div {
    margin: auto;
  }
`

export const Body = styled.section`
  .confirmation {
    margin: auto;
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
      padding-bottom: 2rem;
    }

    &_return {
      outline: none;
      border: none;
      background: transparent;
      position: absolute;
      top: 1rem;
      left: 2rem;
      height: 44px;
      overflow: hidden;
      display: flex;
      align-items: center;
      cursor: pointer;
      @media (max-width: 600px) {
        top: 1.5rem;
      }
    }
    &_icon-logo {
      margin: 2rem;
    }
    &_icon-sucesso {
      margin: 1rem;
    }
    &_title {
      color: #181a44;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    &_subtitle {
      line-height: 20px;
      color: #e0e0e0;
      width: 200px;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    &_details {
      width: 100%;
      margin: auto;
      margin: 1rem 0 4.5rem;
      padding: 0.8rem;
      box-shadow: 0px 3px 6px #0000000f;
      border-radius: 10px;
      &-plan {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f4f3f6;
        padding: 1rem;
        border-radius: 10px;
        &-dscp {
          text-align: right;
          color: #181a44;
          div {
            font-size: 0.875rem;
            margin-top: 0.5rem;
            span {
              &:nth-child(2) {
                &::before {
                  content: " | ";
                  font-size: 0.875rem;
                  color: #181a44;
                  margin: 0 3px;
                }
              }
            }
          }
        }
      }
      &-user {
        color: #e0e0e0;
        padding: 1rem 1rem 0 1rem;
        &-mail {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          span {
            color: #181a44;
          }
        }
        &-cpf {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          span {
            color: #181a44;
          }
        }
      }
    }
    &_go-plan {
      color: #181a44;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.05em;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
    }
    &_go-home {
      margin: auto;
      margin-top: 2rem;
      background: #181a44;
      border-radius: 25px;
      cursor: pointer;
      height: 50px;
      padding: 0.5rem;
      font-size: 0.75rem;
      width: 90%;
      color: white;
      outline: none;
      transition: all 0.3s;
      border: none;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover,
      &:active,
      &:focus {
        transition: background 0.3s, color 0.3s;
        color: white;
        background: #191847;
        outline: none;
        border-color: transparent;
        transition: all 0.3s;
      }
    }
  }
`
