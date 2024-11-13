import BlackButton from "./BlackButton";
import Button from "./Button";
import GreyButton from "./GreyButton";
import HappyButton from "./HappyButton";
import Musinsa from "./Musinsa";

import Portrate from "./Portrate";

function App() {
  return (
    <div className="app">
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <HappyButton></HappyButton>
      <div>
        <GreyButton bgcolor="#6B7280" fontColor="blue"></GreyButton>
        <BlackButton></BlackButton>
      </div>
      <div>
        <Musinsa content="뉴발란스 메가위크"></Musinsa>
        <Musinsa content="제이에스티나 앨리스 펑크"></Musinsa>
        <Musinsa content="스니커즈"></Musinsa>
      </div>
      <div style={{ display: "flex" }}>
        <Portrate
          content="jacow_w"
          imgpath="https://image.msscdn.net/static/images/shared/qr_300.png"
          alt="img1"
          fontColor="red"
          width="100px"
          height="100px"
        ></Portrate>

        <Portrate
          content="jacow_w2"
          imgpath="https://image.msscdn.net/static/images/shared/qr_300.png"
          alt="img1"
          fontColor="blue"
          width="100px"
          height="100px"
        ></Portrate>
      </div>
    </div>
  );
}

export default App;
