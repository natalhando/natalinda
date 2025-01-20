import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const fetchProjects = async () => {
  try {
    const response = await client.getEntries({
      content_type: "projectEntries",
    });
    const entries = response.items.map((item) => ({
      id: item.sys.id,
      key: item.fields.key,
      title: item.fields.title,
      shortDescription: item.fields.shortDescription,
      mainImage: item.fields.mainImage?.fields.file.url,
      date: item.fields.date,
      company: item.fields.company,
      tags: item.fields.tags,
    }));
    return { entries, isLoading: false };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { entries: [], isLoading: false };
  }
};

const fetchProjectByKey = async (key) => {
  try {
    const response = await client.getEntries({
      content_type: "projectEntries",
      "fields.key": key,
    });

    if (response.items.length > 0) {
      const item = response.items[0];
      return {
        id: item.sys.id,
        key: item.fields.key,
        title: item.fields.title,
        shortDescription: item.fields.shortDescription,
        body: item.fields.body,
        mainImage: item.fields.mainImage?.fields.file.url,
        date: item.fields.date,
        company: item.fields.company,
        tags: item.fields.tags,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching project by key:", error);
    return null;
  }
};

const fetchProjectTitleByKey = async (key) => {
  try {
    const response = await client.getEntries({
      content_type: "projectEntries",
      "fields.key": key,
    });

    if (response.items.length > 0) {
      console.log("deu simmm");
      const item = response.items[0];
      const title = item.fields.title;
      console.log("o titulo", title);
      return title;
    }

    return null;
  } catch (error) {
    console.log("num deu");
    console.error("Error fetching title by key:", error);
    return null;
  }
};

export { fetchProjects, fetchProjectByKey, fetchProjectTitleByKey };
