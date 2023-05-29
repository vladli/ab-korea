import Faq_1 from "../faq/Faq_1";
type Props = {
  title: string;
  Component: any;
};

function Collapse({ title, Component }: Props) {
  return (
    <div className="collapse-arrow rounded-box collapse m-2 border border-base-300 bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium">{title}</div>
      <div className="collapse-content collapse-open">
        <div className="prose max-w-none lg:prose-lg">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default Collapse;
