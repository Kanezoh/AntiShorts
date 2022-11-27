window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-mini-guide-entry-renderer')[1] != null ||
          document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer')[1] != null
        ) {
            clearInterval(jsInitCheckTimer);
        }
      }
  const shortsIcon1 = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-mini-guide-entry-renderer')[1];
  const shortsIcon2 = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer')[1];
  shortsIcon1.remove();
  shortsIcon2.remove();
};
