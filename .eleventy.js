import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

/**
 * GitHub Pages alá állítsd be a repozitórium nevét, például:
 * ELEVENTY_PATH_PREFIX=/iskolai-tudastar/
 * A saját domain, Netlify és a GitHub Pages felhasználói oldalainál az alapérték jó.
 */
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";
const slugify = (value) =>
  value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function (eleventyConfig) {
  const markdown = markdownIt({
    html: false,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    level: [2, 3],
    slugify,
  });

  markdown.renderer.rules.table_open = () =>
    '<div class="table-responsive"><table class="table">\n';
  markdown.renderer.rules.table_close = () => "</table></div>\n";

  const renderMarkdown = (source) => {
    const formulas = [];
    let formulaIndex = 0;
    const protectedSource = String(source)
      .replace(/\\\[([\s\S]*?)\\\]/g, (_, tex) => {
        const token = `MATHDISPLAYTOKEN${formulaIndex}`;
        formulaIndex += 1;
        formulas.push({
          token,
          display: true,
          value: `<div class="math-display">\\[${tex}\\]</div>`,
        });
        return token;
      })
      .replace(/\\\(([\s\S]*?)\\\)/g, (_, tex) => {
        const token = `MATHINLINETOKEN${formulaIndex}`;
        formulaIndex += 1;
        formulas.push({ token, display: false, value: `\\(${tex}\\)` });
        return token;
      });

    let html = markdown.render(protectedSource);
    for (const formula of formulas) {
      html = formula.display
        ? html.replace(`<p>${formula.token}</p>`, formula.value)
        : html.replaceAll(formula.token, formula.value);
    }
    return html;
  };

  // A szabványos Markdown HTML-lé alakítása engedélyezett; a nyers HTML tiltott.
  // Így nem szükséges tetszőleges HTML a tartalmi .md fájlokban.
  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.addFilter("markdown", renderMarkdown);
  eleventyConfig.addFilter("tableOfContents", (source) => {
    const tokens = markdown.parse(source, {});
    const headings = [];

    for (let index = 0; index < tokens.length; index += 1) {
      const token = tokens[index];
      if (token.type !== "heading_open" || !["h2", "h3"].includes(token.tag)) continue;
      const inline = tokens[index + 1];
      const id = token.attrGet("id");
      if (!id || !inline) continue;

      headings.push({
        id,
        level: Number(token.tag.slice(1)),
        title: inline.content,
      });
    }

    return headings;
  });

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css": "assets/vendor/bootstrap/bootstrap.min.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "assets/vendor/bootstrap/bootstrap.bundle.min.js",
  });
  // MathJax teljes ES5 csomagja helyben kerül a statikus kimenetbe, a szükséges
  // betűkészletekkel együtt; a képletekhez így nem kell CDN vagy alkalmazásszerver.
  eleventyConfig.addPassthroughCopy({
    "node_modules/mathjax-full/es5": "assets/vendor/mathjax",
  });

  eleventyConfig.addFilter("isoDate", (value) => new Date(value).toISOString());
  eleventyConfig.addFilter("hungarianDate", (value) =>
    new Intl.DateTimeFormat("hu-HU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${value}T00:00:00.000Z`)),
  );
  eleventyConfig.addFilter("take", (items, count) => items.slice(0, count));
  eleventyConfig.addFilter("slugify", slugify);
  eleventyConfig.addFilter("startsWith", (value, prefix) => value.startsWith(prefix));

  return {
    pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
