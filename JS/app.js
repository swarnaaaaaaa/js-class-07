const darkBtn = document.querySelector('.darkBtn')
const body = document.querySelector('body')

const darkMood = ()=> body.classList.toggle('darkmode')
 

darkBtn.addEventListener('click',darkMood)
//--FAQ---//
const faqs = Array.from(document.querySelectorAll('.faq'));

const faqToggle = (event)=>{
   
    const faq = event.currentTarget;
    if(faq.classList.contains('active')){
        faqs.map(faq => faq.classList.remove('active'));
    }else{
        faqs.map(faq => faq.classList.remove('active'));
        faq.classList.add('active');
    }
}

faqs.map(faq => faq.addEventListener('click',faqToggle))

//---PHOTOGALLERY--//

const galleryPopup = document.querySelector('.popupGallery');
let galleryImgs = Array.from(document.querySelectorAll('.gallImg'));
const galleryPopupImage = galleryPopup.querySelector('img')
let currentPosition = 0;

const openGallery = (event,index)=>{
    currentPosition = index;
    console.log(currentPosition);

    const image = event.currentTarget.src;
    galleryPopupImage.src = image;
    galleryPopup.classList.add('active');

}

galleryImgs.map((gallImg,index)=>gallImg.addEventListener('click', ()=>openGallery(event,index)))


const cancelBtn = document.querySelector('.cancelBtn');

const closeGallery = ()=>{
    galleryPopup.classList.remove('active');
}

cancelBtn.addEventListener('click', closeGallery)
// ---NEXT ARROW PRE ARROW---//

const nextArrow = document.querySelector('.rightArrow');
const preArrow = document.querySelector('.leftArrow');

const galleryNext = () => {
  
  if (currentPosition == (galleryImgs.length-1)){
    currentPosition = 0;
  }else{
    currentPosition +=1;
  }
  galleryPopupImage.src = galleryImgs[currentPosition].src;
}
nextArrow.addEventListener('click', galleryNext)

//---PRE arrow--//

const prevGallery = () => {
  
    if (currentPosition == 0 ){
      currentPosition = galleryImgs.length-1;
    }else{
      currentPosition -=1;
    }
    galleryPopupImage.src = galleryImgs[currentPosition].src;
  }
  preArrow.addEventListener('click', prevGallery)