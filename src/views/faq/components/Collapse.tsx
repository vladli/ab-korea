import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
type Props = {
  title: string;
  mdLink: any;
};

function Collapse({ title, mdLink }: Props) {
  const markdownFolder = path.resolve(process.cwd(), "public/markdown/faq");
  const item = fs
    .readFileSync(path.join(markdownFolder, `${mdLink}.md`))
    .toString();
  return (
    <div className="collapse-arrow rounded-box collapse m-2 border border-base-300 bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium">{title}</div>
      <div className="collapse-content collapse-open">
        <div>
          <ReactMarkdown>{item}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
