// 이미지들을 jpeg로 변환하여 다운로드
const imageZipDownloader = async (imageUrls: string[]) => {
  imageUrls.forEach((url, index) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `image-${index + 1}.jpeg`; // 파일 이름 지정
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error('Image download failed:', error));
  });
};

export default imageZipDownloader;
