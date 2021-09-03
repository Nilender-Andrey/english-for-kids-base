const base = 'http://127.0.0.1:4000';

const cards = `${base}/cards`;

export async function getCards(): Promise<Response> {
  const response = await fetch(cards, {
    mode: 'no-cors',
  });
  const result = await response.json();
  return result;
}
