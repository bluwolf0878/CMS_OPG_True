import * as contentful from "contentful";

// Her eksporterer vi vores contentful client, lavet ud fra space ID og access token, som er gemt i en .env fil
export const client = contentful.createClient({
  space: 'nl17prlomkri',
  accessToken: 'B_PLIVDxNdM3Jy8GDzOYTf4-ZcoylcXNTG65nwefdyE',
});
