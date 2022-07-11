export const translations = {
  ["en-US"]: {
    ["error"]: "there was an error",
  },
} as { [key: string]: { [key: string]: string } };

export function getTranslation(key: string): string {
  const lang = localStorage.getItem("lang") || navigator.language;
  return translations[lang][key] || translations["en-US"][key];
}

export function setLanguage(lang: string = navigator.language): void {
  localStorage.setItem("lang", lang);
}