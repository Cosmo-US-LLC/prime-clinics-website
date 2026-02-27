export default async (request, context) => {
  const response = await context.next();
  const html = await response.text();

  const updatedHtml = html
    .replace(
      /<title>[^<]*<\/title>/,
      "<title>Prime Clinics | Opening This Spring</title>"
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*">/,
      '<meta name="description" content="Step into your prime. Prime Clinics offers personalized solutions for physical health, hormone health, intimate health, regenerative aesthetics, weight management, mental fitness, and joint rehabilitation. Opening this spring.">'
    )
    .replace(
      /<link\s+rel="icon"[^>]*>/,
      '<link rel="icon" type="image/svg+xml" href="/fav.svg" />'
    );

  return new Response(updatedHtml, {
    headers: response.headers,
  });
};

export const config = {
  path: "/coming-soon",
};
