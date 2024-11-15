import ShowHeaderOverSubLinks, { linkProp } from "./ShowHeaderOverSubLinks";
import ShowHeaderOverSubLinksTitle, {
  titleProp,
} from "./ShowHeaderOverSubLinksTitle";

type ShowHeaderOverSubProp = titleProp & linkProp;

const ShowHeaderOverSub = () => {
  return (
    <div>
      <ShowHeaderOverSubLinksTitle />
      <ul>
        <ShowHeaderOverSubLinks />
      </ul>
    </div>
  );
};

export default ShowHeaderOverSub;
