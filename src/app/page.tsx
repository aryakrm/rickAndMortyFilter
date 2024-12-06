import { fetchCharacters } from "./utils/fetchCharacters";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // Await searchParams before accessing its properties
  const { status = "", gender = "" } = await searchParams;

  // Now fetch characters using the status and gender filters
  const characters = await fetchCharacters({ status, gender });

  return (
    <div className="container mx-auto p-4">
      <Filters currentFilters={{ status, gender }} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {characters.results.map((char: Character) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg card">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-md mb-2 fotolar"
      />
      <h3 className="text-lg font-bold">{character.name}</h3>
      <p className="text-sm text-gray-600">{character.status}</p>
      <p className="text-sm text-gray-600">{character.gender}</p>
    </div>
  );
}

function Filters({
  currentFilters,
}: {
  currentFilters: { status: string; gender: string };
}) {
  const { status, gender } = currentFilters;

  return (
    <form className="arama flex space-x-4" method="get">
      <select
        name="status"
        defaultValue={status}
        className="p-2 border rounded secme"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        name="gender"
        defaultValue={gender}
        className="p-2 border rounded secme"
      >
        <option value="">All Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded btn-apply"
      >
        Apply
      </button>
    </form>
  );
}
