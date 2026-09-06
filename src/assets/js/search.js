const form = document.querySelector("[data-search-form]");
const input = document.querySelector("[data-search-input]");
const status = document.querySelector("[data-search-status]");
const resultsContainer = document.querySelector("[data-search-results]");

const pagefindUrl = new URL("../../pagefind/pagefind.js", import.meta.url);
const siteBaseUrl = new URL("../../", import.meta.url).pathname;
let pagefind;
let activeSearch = 0;

function setStatus(message) {
  status.textContent = message;
}

function appendExcerpt(target, excerpt) {
  const documentFragment = document.createDocumentFragment();
  const parsed = new DOMParser().parseFromString(excerpt, "text/html");

  for (const node of parsed.body.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      documentFragment.append(node.textContent);
    } else if (node.nodeName === "MARK") {
      const mark = document.createElement("mark");
      mark.textContent = node.textContent;
      documentFragment.append(mark);
    }
  }

  target.append(documentFragment);
}

function resultMeta(result) {
  const metadata = [];
  if (result.meta?.subject) metadata.push(result.meta.subject);
  if (result.meta?.date) metadata.push(result.meta.date);
  return metadata.join(" · ");
}

function renderResults(results) {
  resultsContainer.replaceChildren();

  for (const result of results) {
    const article = document.createElement("article");
    article.className = "search-result surface-panel p-4";

    const title = document.createElement("h2");
    title.className = "h4 mb-2";
    const titleLink = document.createElement("a");
    titleLink.href = result.url;
    titleLink.textContent = result.meta?.title || result.title;
    title.append(titleLink);

    const meta = document.createElement("p");
    meta.className = "search-result__meta mb-2";
    meta.textContent = resultMeta(result);

    const excerpt = document.createElement("p");
    excerpt.className = "search-result__excerpt mb-3";
    appendExcerpt(excerpt, result.excerpt);

    article.append(title, meta, excerpt);

    if (result.meta?.topics) {
      const topics = document.createElement("p");
      topics.className = "search-result__topics mb-0";
      topics.textContent = result.meta.topics;
      article.append(topics);
    }

    resultsContainer.append(article);
  }
}

async function search(query) {
  const requestId = ++activeSearch;
  const trimmedQuery = query.trim();
  resultsContainer.replaceChildren();

  if (!trimmedQuery) {
    setStatus("Írj be egy keresőkifejezést.");
    return;
  }

  setStatus("Keresés folyamatban…");
  try {
    pagefind ??= await import(pagefindUrl);
    await pagefind.options({ baseUrl: siteBaseUrl });
    const response = await pagefind.search(trimmedQuery);
    const results = await Promise.all(response.results.slice(0, 20).map((result) => result.data()));
    if (requestId !== activeSearch) return;

    if (results.length === 0) {
      setStatus(`Nincs találat erre: „${trimmedQuery}”.`);
      return;
    }

    setStatus(`${results.length} találat erre: „${trimmedQuery}”.`);
    renderResults(results);
  } catch (error) {
    console.error("Keresési hiba:", error);
    setStatus("A kereső most nem érhető el. Próbáld meg később újra.");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();
  const url = new URL(window.location.href);
  if (query) url.searchParams.set("q", query);
  else url.searchParams.delete("q");
  window.history.replaceState({}, "", url);
  search(query);
});

const initialQuery = new URLSearchParams(window.location.search).get("q");
if (initialQuery) {
  input.value = initialQuery;
  search(initialQuery);
}
