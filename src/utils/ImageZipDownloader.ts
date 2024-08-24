import JSZip from 'jszip';

const imageZipDownloader = async (imageUrls: string[]): Promise<boolean> => {
  const zip = new JSZip();
  if (imageUrls.length === 0) {
    return false;
  }

  const downloadImage = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const blob = await response.blob();
      const fileName = url.split('/').pop() || 'image';
      zip.file(fileName, blob);
    } catch (error) {
      console.error(`Error processing image ${url}:`, error);
    }
  };

  // 병렬로 이미지 다운로드
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
