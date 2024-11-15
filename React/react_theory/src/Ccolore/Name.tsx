export type nameProps = {
  title?: string;
};

const Name = (props: nameProps) => {
  const { title = "" } = props;
  return <div>{title}</div>;
};

export default Name;
