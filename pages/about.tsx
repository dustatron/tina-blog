import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { usePlugin, useForm } from "tinacms";
import { InlineWysiwyg } from "react-tinacms-editor";
import { InlineForm, InlineText, InlineTextarea } from "react-tinacms-inline";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";

export default function About({ file }) {
  const [data, form] = useGithubJsonForm(file);
  // const [modifiedValues, form] = useForm(file.data);

  usePlugin(form);

  useGithubToolbarPlugins();

  return (
    <div className="container">
      <InlineForm form={form}>
        <h1>
          <InlineText name="title" />
        </h1>
        <h2>
          <InlineText name="subTitle" />
        </h2>
        <hr />
        <div>
          <InlineWysiwyg name="body" format="markdown">
            <ReactMarkdown source={data.body} />
          </InlineWysiwyg>
        </div>
      </InlineForm>
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
