import styled from "styled-components"

export const Header = styled.header`
  width: 768px;
  margin: auto;
  padding: 0 2rem;
  @media (max-width: 600px) {
    padding: 0 1rem;
    width: 100%;
  }
  .header_logo {
    margin-bottom: 4rem;
  }
  .header_informations {
    margin: auto;
    width: 300px;
    text-align: left;
    .plans_title {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 26px;
      margin-bottom: 0.5rem;
    }
    .plans_mail {
      border: 1px solid #f5f5f5;
      padding: 2px 7px;
      border-radius: 10px;
      max-width: fit-content;
      margin-bottom: 1.5rem;
      transition: all 0.3s;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 16px;
      &:hover {
        border-color: rgba(29, 31, 70, 0.9686274509803922);
        transition: all 0.3s;
      }
    }
  }
`

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.688rem;
  margin-top: 2.5rem;
  img {
    margin-left: 10px;
    margin-bottom: -3px;
  }
`
