//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];


//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
    imgs[i].style.borderImage = "url(border.png) 30 30 round"
}


function newBackground() {
        // Set up the image files to be used.
        var theBackgrounds = new Array() // do not change this

        // To add more image files, continue with the pattern below, adding to the array.
        theBackgrounds[0] = 'https://thumbs.gfycat.com/VibrantAdorableHare-max-1mb.gif'
        theBackgrounds[1] = 'https://media4.giphy.com/media/ICOgUNjpvO0PC/giphy.gif'
        theBackgrounds[2] = 'https://media4.giphy.com/media/GeimqsH0TLDt4tScGw/200.gif'
        theBackgrounds[3] = 'https://media1.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif'

        var p = theBackgrounds.length;

        var whichBackground = Math.round(Math.random()*(p-1));


        document.body.style.backgroundImage = "url(" + theBackgrounds[whichBackground] + ")";


    }

newBackground.apply();


//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are Okay.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++){
    p[i].innerText = "cats do not define us but they do entertain us.";
}

