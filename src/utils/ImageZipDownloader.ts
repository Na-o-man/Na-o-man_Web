import JSZip from 'jszip';

const imageZipDownloader = async (imageUrls: string[]): Promise<boolean> => {
  const zip = new JSZip();
  if (imageUrls.length === 0) {
    return false;
  }

  const downloadImage = async (url: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // CORS 문제를 피하기 위해 설정 (무시 가능)
      img.src = url;

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
              if (blob) {
                const fileName = url.split('/').pop() || 'image';
                zip.file(fileName, blob);
                resolve();
              } else {
                reject(new Error('Blob conversion failed'));
              }
            }, 'image/jpeg');
          } else {
            reject(new Error('Canvas context is null'));
          }
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = (error) => {
        console.error(`Error loading image ${url}:`, error);
        reject(error);
      };
    });
  };

  // 병렬로 이미지 다운로드 및 처리
  await Promise.all(imageUrls.map(downloadImage));

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const url = window.URL.createObjectURL(zipBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'images.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  return true;
};

export default imageZipDownloader;
