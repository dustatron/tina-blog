import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { usePlugin } from "tinacms";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";

export default function About({ file }) {
  const formOptions = {
    label: "About Page",
    fields: [
      { name: "Title", component: "text" },
      { name: "Sub Title", component: "text" },
      { name: "Body", component: "text" },
    ],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  useGithubToolbarPlugins();

  return (
    <div>
      <h1>{data["Title"]}</h1>
      <h2>{data["Sub Title"]}</h2>
      <div>{data["Body"]}</div>
    </div>
  );
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/about.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/about.json",
        data: (await import("../content/about.json")).default,
      },
    },
  };
};
