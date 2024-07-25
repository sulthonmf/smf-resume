import { Entry } from 'contentful';
import { fetchEntries } from '../(lib)/contentful';

export default async function Projects() {
//   const entries = await fetchEntries<{ title: string }>('author');

  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul>
        {/* {entries.map((entry) => (
          <li key={entry.sys.id}>
            <h2 className="text-xl font-semibold">{entry.fields.title}</h2>
            <p>{entry.fields.description}</p>
          </li>
        ))} */}
        <a>Project</a>
      </ul>
    </div>
  );
}
