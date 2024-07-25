import Hero from './(components)/Hero';
import { fetchEntries } from './(lib)/contentful';
import { mapContentfulDataToProps } from './(lib)/contentfulUtils';
import { AuthorEntry } from './types/contentful';

// Mock function to simulate data fetching
const fetchContentfulData = async (): Promise<AuthorEntry> => {
  const response = await fetchEntries<{
    firstName: string;
    lastName: string;
    position: string;
    image: string;
    quotes: string;
  }>("author");
  return response[0]; // Assuming you're fetching an array
};

export default async function Home() {
  const contentfulData = await fetchContentfulData();
  const props = await mapContentfulDataToProps(contentfulData);

  return (
    <main>
      <Hero {...props} />
      <div>Tech stack content</div>
      {/* Other sections of your homepage */}
    </main>
  );
}
