// 이미지들을 jpeg로 변환하여 다운로드
const imageZipDownloader = async (imageUrls: string[]) => {
  imageUrls.forEach((url, index) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement('canvas');
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      // for create tag anchor
      const a = document.createElement('a');
      a.download = `image-${index}-download`;
      a.href = canvas.toDataURL('image/jpeg');
      a.click();
    };
  });
};

export default imageZipDownloader;
