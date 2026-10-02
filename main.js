const contents = document.getElementById('contents');
if (contents) {
  const contentsParent = contents.parentNode;
  contentsParent.removeChild(contents);

  //create message
  const message = document.createElement('p');
  message.textContent = "Get Back to Building Your Dreams";
  message.classList.add('beautText');

  //create image placeholder
  const img = document.createElement('img');

  //add elements to page first (optional)
  contentsParent.prepend(img);
  contentsParent.prepend(message);

  //fetch random photo from Picsum
  fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(data => {
  console.log("Picsum data:", data);

  //pick a random image from the list
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomPhoto = data[randomIndex];

  console.log("Random photo:", randomPhoto);

  //update image on page
  img.src = randomPhoto.download_url;
  img.alt = randomPhoto.author;

  //show name
  const authorText = document.createElement('p');
  authorText.textContent = `Photo by: ${randomPhoto.author}`;
  authorText.classList.add('beautText1');
  contentsParent.prepend(authorText);
  })
  .catch(error => console.error("Error fetching Picsum data:", error));
}

console.log('Extension script running...');
