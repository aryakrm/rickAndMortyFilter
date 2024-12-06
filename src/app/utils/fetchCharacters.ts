export async function fetchCharacters(filters: {
  status?: string;
  gender?: string;
}) {
  const query = new URLSearchParams(
    Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
  ).toString();

  console.log("Generated Query:", query);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  return response.json();
}
