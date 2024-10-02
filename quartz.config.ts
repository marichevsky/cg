import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    titleImage: "Files/preemChrome-new2.png",
    pageTitle: "Marichevsky.ru 🫧",
    pageTitleSuffix: " | Marichevsky",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "marichevsky.ru",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#0A1D28",
          lightgray: "#414559",
          gray: "#0A151B",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#52EEA3",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
          rosewater: "#FFD2CE",
          flamingo: "#FFB1B1",
          pink: "#C952ED",
          mauve: "#9446F8",
          red: "#E9404B",
          maroon: "#E3365E",
          peach: "#FA9F50",
          yellow: "#FFD85E",
          green: "#52EEA3",
          teal: "#51E1E9",
          sky: "#54B6F8",
          sapphire: "#2554C7",
          blue: "#437CF3",
          lavender: "#B57EDC",
        },
        darkMode: {
          light: "#0A1D28",
          lightgray: "#414559",
          gray: "#0A151B",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#52EEA3",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
          rosewater: "#FFD2CE",
          flamingo: "#FFB1B1",
          pink: "#C952ED",
          mauve: "#9446F8",
          red: "#E9404B",
          maroon: "#E3365E",
          peach: "#FA9F50",
          yellow: "#FFD85E",
          green: "#52EEA3",
          teal: "#51E1E9",
          sky: "#54B6F8",
          sapphire: "#2554C7",
          blue: "#437CF3",
          lavender: "#B57EDC",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
