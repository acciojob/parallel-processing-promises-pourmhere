//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
btn.addEventListener("click", async () => {
      try {
        const imagePromises = images.map(imageObj => downloadImage(imageObj.url));
        const downloadedImages = await Promise.all(imagePromises);
        showImages(downloadedImages);
      } catch (error) {
        console.error(error);
      }
    });

    function downloadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
        img.src = url;
      });
    }

    function showImages(images) {
      output.innerHTML = '';
      images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        output.appendChild(imgElement);
      });
    }