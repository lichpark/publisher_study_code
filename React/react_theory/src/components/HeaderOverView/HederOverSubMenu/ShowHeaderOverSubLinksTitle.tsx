export type titleProp = {
  title?: string;
};
const ShowHeaderOverSubLinksTitle = (props: titleProp) => {
  const { title = "쇼핑하기" } = props;
  return <div>{title}</div>;
};

export default ShowHeaderOverSubLinksTitle;
