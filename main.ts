Deno.serve(async (req) => {
  const url = new URL(req.url);
  const target = url.searchParams.get("url");
  if (!target) return new Response("Missing ?url=", { status: 400 });

  const r = await fetch(target, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Accept": "application/json, text/html, */*",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  const text = await r.text();
  return new Response(`Status: ${r.status}\n${text.slice(0, 500)}`);
});
