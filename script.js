document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // Ensure data-src exists before replacing src
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src"); // Remove data-src after loading
        }

        img.classList.remove("lazy");
        img.classList.add("loaded");

        observer.unobserve(img); // Stop observing once loaded
      }
    });
  });

  // Observe each lazy image
  lazyImages.forEach((img) => imageObserver.observe(img));

  // console.log(imageObserver);
});