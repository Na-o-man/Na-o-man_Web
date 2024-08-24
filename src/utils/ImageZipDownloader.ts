import JSZip from 'jszip';

// 이미지들을 jpeg로 변환하여 zip 파일로 다운로드
const imageZipDownloader = async (imageUrls: string[]): Promise<boolean> => {
  const zip = new JSZip();
  if (imageUrls.length === 0) {
    return false;
  }
  for (const url of imageUrls) {
    try {
      const response = await fetch(url, {
        method: 'GET', // 기본값이 GET이므로 명시적으로 작성할 필요는 없습니다.
        credentials: 'include', // 인증 정보를 포함합니다.
      });
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
  return true;
};

export default imageZipDownloader;
