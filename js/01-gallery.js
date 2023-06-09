import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const markUp = galleryItems.map(({preview, original, description})=>
`<li class="gallery__item">
<a class="gallery__link" href=${original}>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`).join('');

gallery.insertAdjacentHTML('afterbegin', markUp)

const handlerGallery = evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return};
    const originalImage = evt.target.dataset.source; 
       
     const instance = basicLightbox.create(`
    <div class="modal">
    <img width="1280" src="${originalImage}">
    </div>
`)
instance.show((instance) => {
    	document.onkeydown = function(evt) {
    		evt = evt || window.event;
    		let isEscape = false;
    		if ( "key" in evt ) {
    			isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
    		} else {
    			isEscape = ( evt.keyCode === 27 );
    		}
    		if ( isEscape ) {
    			instance.close();
    		}
    	};
    },)
};

gallery.addEventListener('click', handlerGallery);


console.log(galleryItems);
