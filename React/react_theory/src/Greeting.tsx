//props 에서 isMoring 불리언값 받아서
//true면 좋은아침, 아니면 안녕하세요 스팬태그 돌려주는거 만들기

const Greeting = (props: { isMoring: boolean }) => {
  return (
    <>
      {props.isMoring === true ? (
        <span>좋은아침!</span>
      ) : (
        <span>안녕하세요!</span>
      )}
    </>
  );
};

export default Greeting;
