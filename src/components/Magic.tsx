import React from 'react';
import styled from 'styled-components';

const StyledMagic = styled.div`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    overflow: hidden;
  }

  .pyro > .before,
  .pyro > .after {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: -120px -218.66667px #daa520, 248px -16.66667px #daa520,
      190px 16.33333px #daa520, -113px -308.66667px #daa520,
      -109px -287.66667px #daa520, -50px -313.66667px #daa520,
      226px -31.66667px #daa520, 180px -351.66667px #daa520,
      -12px -338.66667px #daa520, 220px -388.66667px #daa520,
      -69px -27.66667px #daa520, -111px -339.66667px #daa520,
      155px -237.66667px #daa520, -152px -380.66667px #daa520,
      -50px -37.66667px #daa520, -95px -175.66667px #daa520,
      -88px 10.33333px #daa520, 112px -309.66667px #daa520,
      69px -415.66667px #daa520, 168px -100.66667px #daa520,
      -244px 24.33333px #daa520, 97px -325.66667px #daa520,
      -211px -182.66667px #daa520, 236px -126.66667px #daa520,
      140px -196.66667px #daa520, 125px -175.66667px #daa520,
      118px -381.66667px #daa520, 144px -111.66667px #daa520,
      36px -78.66667px #daa520, -63px -196.66667px #daa520,
      -218px -227.66667px #daa520, -134px -377.66667px #daa520,
      -36px -412.66667px #daa520, 209px -106.66667px #daa520,
      91px -278.66667px #daa520, -22px -191.66667px #daa520,
      139px -392.66667px #daa520, 56px -2.66667px #daa520,
      -156px -276.66667px #daa520, -163px -233.66667px #daa520,
      -238px -346.66667px #daa520, 62px -363.66667px #daa520,
      244px -170.66667px #daa520, 224px -142.66667px #daa520,
      141px -208.66667px #daa520, 211px -285.66667px #daa520,
      181px -128.66667px #daa520, 90px -123.66667px #daa520,
      189px 70.33333px #daa520, -18px -383.66667px #daa520,
      100px -6.66667px #daa520;
    -moz-animation: 10s bang ease-out infinite backwards,
      10s gravity ease-in infinite backwards,
      50s position linear infinite backwards;
    -webkit-animation: 10s bang ease-out infinite backwards,
      10s gravity ease-in infinite backwards,
      50s position linear infinite backwards;
    -o-animation: 10s bang ease-out infinite backwards,
      10s gravity ease-in infinite backwards,
      50s position linear infinite backwards;
    -ms-animation: 10s bang ease-out infinite backwards,
      10s gravity ease-in infinite backwards,
      50s position linear infinite backwards;
    animation: 10s bang ease-out infinite backwards,
      10s gravity ease-in infinite backwards,
      50s position linear infinite backwards;
  }

  .pyro > .after {
    -moz-animation-delay: 10.25s, 10.25s, 10.25s;
    -webkit-animation-delay: 10.25s, 10.25s, 10.25s;
    -o-animation-delay: 10.25s, 10.25s, 10.25s;
    -ms-animation-delay: 10.25s, 10.25s, 10.25s;
    animation-delay: 10.25s, 10.25s, 10.25s;
    -moz-animation-duration: 10.25s, 10.25s, 60.25s;
    -webkit-animation-duration: 10.25s, 10.25s, 60.25s;
    -o-animation-duration: 10.25s, 10.25s, 60.25s;
    -ms-animation-duration: 10.25s, 10.25s, 60.25s;
    animation-duration: 10.25s, 10.25s, 60.25s;
  }

  @-webkit-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white;
    }
  }
  @-moz-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white;
    }
  }
  @-o-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white;
    }
  }
  @-ms-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white;
    }
  }
  @keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white;
    }
  }
  @-webkit-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-moz-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-o-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-ms-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-webkit-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-moz-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-o-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-ms-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
`;

export const Magic = () => {
  return (
    <StyledMagic>
      <div className="pyro">
        <div className="before" />
        <div className="after" />
      </div>
    </StyledMagic>
  );
};
