// scripts/indexnow-ping.mjs
//
// Reads the production sitemap and submits every URL to IndexNow.
// Pings api.indexnow.org which fans out to Bing/Yandex/Seznam.
//
// The key file must be live at:
//   https://www.privateinvestigatormanhattan.com/{KEY}.txt
// with the key as the file contents. See public/{KEY}.txt.
//
// Invoke after every prod deploy. The GitHub Action in
// .github/workflows/indexnow.yml does this on push to main.

const SITE = 'https://www.privateinvestigatormanhattan.com';
const KEY = 'a7c39b5d2e8f41c690b8a5d7e3f2c1486';
const HOST = 'www.privateinvestigatormanhattan.com';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

async function main() {
  const sitemapRes = await fetch(`${SITE}/sitemap.xml`, { redirect: 'follow' });
  if (!sitemapRes.ok) {
    console.error(`sitemap fetch failed: ${sitemapRes.status}`);
    process.exit(1);
  }
  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  if (urls.length === 0) {
    console.error('no URLs found in sitemap');
    process.exit(1);
  }
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const keyRes = await fetch(KEY_LOCATION);
  if (!keyRes.ok) {
    console.error(`key file not reachable at ${KEY_LOCATION}: ${keyRes.status}`);
    process.exit(1);
  }
  const keyContent = (await keyRes.text()).trim();
  if (keyContent !== KEY) {
    console.error(`key file content mismatch (got "${keyContent}")`);
    process.exit(1);
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const ping = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const respText = await ping.text();
  console.log(`IndexNow response: ${ping.status} ${respText || '(empty body = success)'}`);
  if (!ping.ok) process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
