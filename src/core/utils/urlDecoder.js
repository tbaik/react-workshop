module.exports = {
  decodeAmpersand: function(url) {
    return url.replace(/&amp;/g, '&');
  }
}
