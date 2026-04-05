import lume from "lume/mod.ts";

// Plugins
import remark from "lume/plugins/remark.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import esbuild from "lume/plugins/esbuild.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import check_urls from "lume/plugins/check_urls.ts";
import inline from "lume/plugins/inline.ts";
import redirects from "lume/plugins/redirects.ts";
import feed from "lume/plugins/feed.ts";
// TODO wait for stable
import cacheBusting from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/cache_busting/mod.ts";

// Local code
import { LogBrokenLinks } from "./_includes/utils.ts";

const site = lume({
});

site.use(remark());
site.use(jsx());
site.use(mdx());
site.use(esbuild());
site.use(codeHighlight());
site.use(readingInfo());
site.use(sass({ options: { silenceDeprecations: ["import"], }, })); // TODO wait for sass to fix their mess
site.use(tailwindcss());
site.use(resolve_urls());
site.use(slugify_urls());
site.use(inline());
site.use(cacheBusting());
site.use(check_urls({ output: LogBrokenLinks, ignore: ["/yapper/"], }));
site.use(redirects());
site.use(feed({ query: "category=blogpost !draft", }));

// Data
site.mergeKey("section", "none");
site.mergeKey("category", "none");
site.mergeKey("query", "none");
site.mergeKey("tags", "stringArray");

// Assets
site.add("assets"); // TODO plugin for auto import
site.add("robots.txt");

// Misc
site.ignore("misc");

export default site;
