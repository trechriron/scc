// const [markdown, setMarkdown] = useState(null);
// const importMarkdown = async () => {
//   try {
//     const markdownDyn = await import("https://esm.sh/marked-react");
//     console.log("markdown imported");
//     setMarkdown(markdownDyn);
//   } catch (err) {
//     console.log("markdown import error", err);
//   }

// };
const [markdown, setMarkdown] = useState(null);
const importMarkdown = async () => {
  try {
    // ! This will kick of an individual net request for every instance of
    // ! this component rendered to the page since iframes do not share
    // ! cached resources
    const markdownDyn = await import("https://esm.sh/markdown-to-jsx@7.3.2");
    console.log("markdown imported");
    setMarkdown(markdownDyn);
  } catch (err) {
    console.log("markdown import error", err);
  }
};

useEffect(() => {
  importMarkdown();
}, []);

const [rendered, setRendered] = useState(null);

useEffect(() => {
  if (!markdown) return;

  setRendered(
    markdown.compiler(props.content, {
      forceBlock: true,
      enforceAtxHeadings: true,
    })
  );
}, [markdown]);

// const Markdown = markdown;
return markdown ? <div>{rendered}</div> : <div>Loading</div>;
