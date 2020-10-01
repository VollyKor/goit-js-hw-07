const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const addImageToGallery = newImagesArray => {

const galleryListRef = document.querySelector('ul#gallery');
galleryListRef.classList.add('gallery-list')

const imagesArray = newImagesArray.map(obj => {
        const imageItem = document.createElement('li');
        imageItem.classList.add('gallery-item')

        const image = document.createElement('img');
        image.classList.add('gallery-img')
        
        image.setAttribute('src', obj.url);
        image.setAttribute('alt', obj.alt);
        // image.setAttribute('width', '400px')

        imageItem.appendChild(image);
        return imageItem;
    }) 

    return galleryListRef.append(...imagesArray);
  }

  addImageToGallery(images);