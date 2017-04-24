function decode(url) {
  return url.replace(/&amp;/g, '&');
}

export { decode }
