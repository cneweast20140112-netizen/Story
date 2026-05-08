const readerRoot = document.querySelector("#reader");

function resetReaderScroll() {
  window.setTimeout(() => {
    readerRoot.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
}

document.addEventListener("click", (event) => {
  const shouldReset =
    event.target.closest("[data-read]") ||
    event.target.closest("button[data-chapter]") ||
    event.target.closest("#prevChapter") ||
    event.target.closest("#nextChapter");

  if (shouldReset) resetReaderScroll();
});
