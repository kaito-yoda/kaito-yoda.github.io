document.querySelectorAll('a[href]').forEach(link => {
  const url = new URL(link.href, window.location.href);

  if (url.hostname !== window.location.hostname) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});