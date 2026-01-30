
const images = document.querySelectorAll(".img_list img")
console.log(images);

const options = {
    threshold: 0.5,
}

const lazyPictureObserver = new IntersectionObserver(onEntry, options)



function onEntry(entries){
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            entry.target.classList.add('appear')
            
            lazyPictureObserver.unobserve(entry.target)
        }
    })
}

images.forEach(image => {
lazyPictureObserver.observe(image)
})
