import * as contentful from "contentful";

// Her eksporterer vi vores contentful client, lavet ud fra space ID og access token, som er gemt i en .env fil
export const client = contentful.createClient({
  space: import.meta.env.VITE_PUBLIC_SPACE_ID,
  accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
});
