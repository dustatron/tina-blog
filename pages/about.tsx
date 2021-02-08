import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { usePlugin, useForm } from "tinacms";
import { InlineForm, InlineText } from "react-tinacms-inline";
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
  // const [modifiedValues, form] = useForm(file.data);

  usePlugin(form);

  useGithubToolbarPlugins();

  return (
    <div>
      <InlineForm form={form}>
        <h1>{data.title}</h1>
        <h1>
          <InlineText name="title" />
        </h1>
        <div>{data.subTitle}</div>
        <div>
          <InlineText name="subTitle" />
        </div>
        <div>
          <InlineText name="body" />
        </div>
        {/* <h1>{modifiedValues["Title"]}</h1>
        <h2>{modifiedValues["Sub Title"]}</h2>
        <div>{modifiedValues["Body"]}</div> */}
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
