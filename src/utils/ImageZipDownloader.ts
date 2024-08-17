import JSZip from 'jszip';

// 이미지들을 jpeg로 변환하여 zip 파일로 다운로드
const imageZipDownloader = async ({
  imageUrls,
}: {
  imageUrls: string[];
}): Promise<void> => {
  const zip = new JSZip();

  for (const url of imageUrls) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileName = url.split('/').pop() || 'image';
      zip.file(fileName, blob);
    } catch (error) {
      console.error('Error processing image:', error);
      throw error;
    }
  }

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const url = window.URL.createObjectURL(zipBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'images.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export default imageZipDownloader;