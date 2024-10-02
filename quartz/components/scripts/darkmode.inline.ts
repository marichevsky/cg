const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark"
const currentTheme = localStorage.getItem("theme") ?? userPref
document.documentElement.setAttribute("saved-theme", currentTheme)

const emitThemeChangeEvent = (theme: "dark" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = (e: Event) => {
    const newTheme =
      document.documentElement.getAttribute("saved-theme") === "dark" ? "dark" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  // Darkmode toggle
  const themeButton = document.querySelector("#darkmode") as HTMLButtonElement
  themeButton.addEventListener("click", switchTheme)
  window.addCleanup(() => themeButton.removeEventListener("click", switchTheme))

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
