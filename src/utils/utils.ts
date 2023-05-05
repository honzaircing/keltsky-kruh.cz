const changeMetaTags = (meta: any) => {
  document.title = `${meta.title} - Keltský kruh - Celtic Circle`;
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", meta["og:title"]);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", meta["og:description"]);
  // document.querySelector('meta[name="og:description"]').setAttribute("content", meta['og:description']);
  // document.querySelector('meta[name="keywords"]').setAttribute("content", meta.keywords);
};

export { changeMetaTags };
