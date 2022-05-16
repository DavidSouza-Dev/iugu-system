import styled from "styled-components"

export const Wrapper = styled.main`
  margin: auto;
  width: 330px;
  text-align: left;
}
`
export const Plans = styled.div`
  border: 1px solid #181a44;
  border-radius: 16px;
  margin: 0.7rem 0;
  padding: 1.3rem 1rem;
  display: flex;
  font-size: 0.75rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  label {
    font-weight: 700;
  }
  .plans_item-prices {
    font-weight: 400;
    font-size: 0.75rem;
    position: relative;
    width: 211px;
    margin: 0.4rem 0;
    .plans_item-prices-of {
      font-family: DM Sans, sans-serif;
    }
    .plans_item-prices-discount {
      background: #f5850b;
      border-radius: 16px;
      padding: 3px 10px;
      font-size: 0.625rem;
      color: #fff;
      position: absolute;
      right: -1.75rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .plans_item-installment {
    color: #f5850b;
    font-size: 0.625rem;
  }
  input[type="radio"] {
    opacity: 0;
    margin-top: 0px;
    position: absolute;
    right: 18px;
    z-index: 9999;
    &:checked {
      & ~ span {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: rgb(24, 26, 68);
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: -3px;
          right: -3px;
          bottom: -3px;
          left: -3px;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          z-index: 999;
        }
      }
    }
    & ~ span {
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background: transparent;
      position: relative;
      margin-right: 5px;
      &::before {
        content: "";
        position: absolute;
        top: -3px;
        right: -3px;
        bottom: -3px;
        left: -3px;
        border: 1px solid #e0e0e0;
        border-radius: 50%;
      }
    }
  }
`
