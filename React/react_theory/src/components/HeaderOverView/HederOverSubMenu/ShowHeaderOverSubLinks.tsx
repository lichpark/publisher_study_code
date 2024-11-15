export type linkProp = {
  title?: string;
  linkText?: string;
};
const ShowHeaderOverSubLinks = (props: linkProp) => {
  const { title = "내용입력" } = props;
  const { linkText = "" } = props;
  return (
    <li>
      <a href={linkText}>{title}</a>
    </li>
  );
};

export default ShowHeaderOverSubLinks;
