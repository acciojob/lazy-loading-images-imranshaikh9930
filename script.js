//your JS code here. If required.


// code of lazy loading
// detect viewPort of image 


document.addEventListener("DOMContentLoaded",function(){

  const lazyImages = document.querySelectorAll("img.lazy");

  const imageObserver = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=> {
      console.log(entry)
      if(entry.isIntersecting){
        const img = entry.target;
        img.src= img.dataset.src ;
        img.classList.remove("lazy");
        observer.unobserve(img)
      }
    });
  })

  lazyImages.forEach((img)=>{
    imageObserver.observe(img);
  })

  // console.log(imageObserver);
})