// import BlackButton from "./BlackButton";
// import Button from "./Button";
// import Greeting from "./Greeting";
// import GreyButton from "./GreyButton";
// import HappyButton from "./HappyButton";
// import Musinsa from "./Musinsa";
// import Portrate from "./Portrate";
// import KVtext from "./KVtext";
// import KiaButton from "./KiaButton";
// import KiaBox from "./KiaBox";
// import Warn from "./Warn";

import Popup from "./ButtonMake/Popup";
import PanelWrap from "./Ccolore/PanelWrap";

import MunsinsaPriceAndPer from "./Musinsa/MunsinsaPriceAndPer";
import { FaCartArrowDown } from "react-icons/fa";
import { GiFlatHammer } from "react-icons/gi";

// import { IconBaseProps } from "react-icons";
import Box from "./iconins/Box";
import Header from "./Layout/Header";

// const textList = {
//   warnText: [
//     `네트워크 연결상태를 확인하고
// 다시 시도해주세요.`,
//     `서비스 이용에 불편을 드려 죄송합니다.
// 잠시후 다시 시도해 주십시오.`,
//   ],
// };

function App() {
  // const list = [
  //   { id: 1, titleText: "차량번호", dataText: "123가0987" },
  //   { id: 2, titleText: "차량명", dataText: "쏘렌토" },
  //   { id: 3, titleText: "연식", dataText: "2019년형" },
  //   { id: 4, titleText: "트림", dataText: "트렌디" },
  // ];

  return (
    <div className="app">
      {/* <Button></Button>
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
          classname="divClass"
        ></Portrate>

        <Portrate
          content="jacow_w2"
          imgpath="https://image.msscdn.net/static/images/shared/qr_300.png"
          alt="img1"
          fontColor="blue"
          width="100px"
          height="100px"
          classname="divClass"
        ></Portrate>
      </div> */}
      {/* <Greeting isMoring={true}></Greeting>
      <Greeting isMoring={false}></Greeting> */}
      {/* <div>
        <Button bgcolor="#2A59FE" content="Primary" color="grey"></Button>
        <Button bgcolor="#557AFE" content="Secondary" color="white"></Button>
      </div> */}

      {/* <KVtext titleText="차량번호" dataText="123가0987"></KVtext>
      <KVtext titleText="차량명" dataText="쏘렌토"></KVtext>
      <KVtext titleText="연식" dataText="2019년형"></KVtext> */}
      {/* {list.map((v) => (
        <KVtext
          key={v.id}
          titleText={v.titleText}
          dataText={v.dataText}
        ></KVtext>
      ))}
      <div>
        <KiaButton bgcolor="grey70" titleText="인증 검수 시작"></KiaButton>
        <KiaButton bgcolor="grey80" titleText="인증 검수 시작"></KiaButton>
        <KiaButton bgcolor="grey90" titleText="인증 검수 시작"></KiaButton>
      </div>
      <div>
        <KiaBox KeyName="쏘렌토" StatusName="대기"></KiaBox>
        <KiaBox KeyName="카니발" StatusName="대기"></KiaBox>
        <KiaBox KeyName="쏘렌토" StatusName="대기"></KiaBox>
      </div>
      <>
        <Warn
          mainText="네트워크 연결이 원활하지 않습니다. "
          descText1={textList.warnText[0]}
          buttonText="다시 시도하기"
        ></Warn>
        <Warn
          mainText="데이터로드에 실패했습니다. "
          descText1={textList.warnText[1]}
          buttonText="다시 시도하기"
        ></Warn>
      </> */}
      <MunsinsaPriceAndPer text={0} color={"red"} price={395000} />
      <MunsinsaPriceAndPer text={10} color={"red"} price={399000} />
      <div>
        <Popup />
        <Popup message="점메추 제발" buttonText="쌀국수" />
      </div>
      <div>
        <PanelWrap
          title="썸머라이트 500"
          Price={219000}
          bgcolors={[
            { backgroundColor: "blue" },
            { backgroundColor: "green" },
            { backgroundColor: "yellow" },
          ]}
        />
      </div>
      {/* <FaCartArrowDown />
      <GiFlatHammer /> */}
      <Box Icon={FaCartArrowDown} />
      <Box Icon={GiFlatHammer} />
      <>
        <Header
          children={
            <MunsinsaPriceAndPer text={0} color={"blue"} price={395000} />
          }
        />
        <Header children={"text"} />
      </>
    </div>
  );
}

export default App;
