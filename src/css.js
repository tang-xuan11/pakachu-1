const string = `
  .skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::after,
  .skin *::before {
    box-sizing: border-box;
  }
  .skin {
    background: rgb(255, 230, 0);
    min-height: 100vh;
    position: relative;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 10px;
    height: 10px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
  }
  @media (max-width: 500px) {
    .nose {
      top : 105px;
    }
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover{
    transform-origin: 50% 100%;
    animation: wave 200ms infinite linear;
  }
  .yuan {
    position: absolute;
    border: 1px solid black;
    width: 20px;
    height: 4px;
    top: -14px;
    transform: translateX(-10px);
    border-top-left-radius: 11em 5em;
    border-top-right-radius: 11em 5em;
    background-color: black;
  }
  .eye {
    position: absolute;
    border: 3px solid rgb(0, 0, 0);
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: rgb(46, 46, 46);
    border-radius: 50%;
  }
  @media (max-width: 500px) {
    .eye {
      top : 60px;
    }
  }  
  .eye::before {
    content: "";
    display: block;
    position: relative;
    border: 3px solid rgb(0, 0, 0);
    width: 31px;
    height: 31px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    left: 8px;
    top: -2px;
  }
  .eye.right {
    transform: translateX(115px);
  }
  .eye.left {
    transform: translateX(-115px);
  }
  .mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  @media (max-width: 500px) {
    .mouth {
      top:130px;
    }
  }  
  .mouth .up {
    position: relative;
    top: -10px;
  }
  .mouth .up .lip {
    position: absolute;
    width: 80px;
    height: 30px;
    border: 3px solid rgb(0, 0, 0);
    border-top: none;
    z-index: 1;
    background: rgb(255, 230, 0);
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-right: none;
    transform: rotate(-20deg) translateX(-0.5px);
    left: 50%;
    margin-left: -81px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-left: none;
    transform: rotate(20deg) translateX(0.5px);
    right: 50%;
    margin-right: -81px;
  }
  .mouth .down {
    height: 170px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    height: 1000px;
    position: absolute;
    width: 140px;
    left: 50%;
    margin-left: -70px;
    border-radius: 75px/300px;
    bottom: 0;
    background: rgb(155, 0, 10);
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    border: 1px solid red;
    position: absolute;
    width: 150px;
    height: 140px;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    background: rgb(255, 72, 95);
    border-radius: 50%;
  }
  .face {
    position: absolute;
    width: 82px;
    height: 82px;
    border: 3px solid black;
    left: 50%;
    margin-left: -41px;
    top: 210px;
    border-radius: 50%;
    background: rgb(255, 0, 0);
  }
  @media (max-width: 500px) {
    .face {
      top : 170px;
    }
  }  
  .face.left {
    transform: translateX(-150px);
  }
  @media (max-width: 500px) {
    .face.left {
      transform: translateX(-140px);
    }
  }  
  .face.right {
    transform: translateX(150px);
  }
  @media (max-width: 500px) {
    .face.right {
      transform: translateX(140px);
    }
  }  
`;
export default string;
