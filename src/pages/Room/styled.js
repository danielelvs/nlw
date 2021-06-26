import styled from "styled-components";
import { HomeMainContentStyled, HomeStyled } from "../Home/styled";

export const NewRoomStyled = styled(HomeStyled)``;
export const NewRoomMainContentStyled = styled(HomeMainContentStyled)``;
export const RoomHeaderStyled = styled.header``;
export const RoomMainContentStyled = styled.main``;
export const RoomMainContentTitleStyled = styled.div``;
export const RoomMainContentFormStyled = styled.form``;
export const RoomMainContentQuestionsStyled = styled.div``;

export const RoomStyled = styled.div`
  ${RoomHeaderStyled} {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      > div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  ${RoomMainContentStyled} {
    max-width: 800px;
    margin: 0 auto;

    ${RoomMainContentTitleStyled} {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        color: #fff;
        border-radius: 9999px;
        padding: 8px 16px;
        font-weight: 500;
        font-size: 14px;
      }
    }

    ${RoomMainContentFormStyled} {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8p;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        div {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: #29292e;
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: #737380;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    ${RoomMainContentQuestionsStyled} {
      margin-top: 32px;
    }
  }
`;
