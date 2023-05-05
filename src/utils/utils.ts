const changeMetaTags = (meta: any) => {
  document.title = `${meta.title} - Keltský kruh - Celtic Circle`;

  const metaTitle = document.querySelector(
    'meta[property="og:title"]'
  ) as HTMLInputElement | null;
  if (metaTitle !== null) {
    metaTitle.setAttribute("content", meta["og:title"]);
  }

  const metaDesc = document.querySelector(
    'meta[property="og:description"]'
  ) as HTMLInputElement | null;
  if (metaDesc !== null) {
    metaDesc.setAttribute("content", meta["og:description"]);
  }
};

export { changeMetaTags };
