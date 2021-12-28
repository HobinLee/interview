import style from "styled-components";

export const WaitingRoomWrapper = style.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 90vh;
  width: 100%;

  .question-set {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
    font-size: 2rem;
  }

  .waiting-room {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &__content {
      display: flex;
      > div {
        border-radius: 1rem;
      }
    }

    &__camera {
      min-width: 400px;
      width: 50vw;
      height: 28vw;
      background: #333;
    }

    &__start {
      width: 44.8rem;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      > h3 {
        font-size: 2.8rem;
      }

      > a {
        font-size: 1.6rem;
        display: block;
        padding: 1.7rem 3rem;
        background: #1a73e8;
        color: #fff;
        border-radius: 2.5rem;
        text-decoration: none;
      }
    }
  }
`