import { AuthorEntry } from "../types/contentful";
import { client } from "./contentful";

// Mock function to simulate fetching image URL
const fetchImageUrl = async (id: string) => {
  try {
    const space = await client.getSpace(
      process.env.CONTENTFUL_SPACE_ID as string
    );
    const environment = await space.getEnvironment("master");
    const asset = await environment.getAsset(id);

    const imageURL = 'https:' + asset.fields.file["en-US"].url

    // Return the URL of the image
    return imageURL;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return ""; // Return an empty string or handle the error appropriately
  }
};

export const mapContentfulDataToProps = async (entry: AuthorEntry) => {
  const { firstName, lastName, position, image, quotes } = entry.fields;
  
  // Fetch the image URL
  const imageUrl = await fetchImageUrl(image['en-US'].sys.id);

  return {
    firstName: firstName['en-US'],
    lastName: lastName['en-US'],
    position: position['en-US'],
    imageUrl,
    quotes: quotes['en-US']
  };
};

