import JSZip from 'jszip';

// 모바일 장치인지 확인
const isMobile = (): boolean => {
  if (window.matchMedia('(max-width: 1000px)').matches) {
    return true;
  }
  // 두 번째 방법
  const userAgent = navigator.userAgent;

  // iOS, Android, Windows Phone 등의 모바일 장치를 감지
  if (/android/i.test(userAgent)) {
    return true;
  }

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return true;
  }

  if (/windows phone/i.test(userAgent)) {
    return true;
  }

  // 기타 모바일 장치 감지
  if (/mobile/i.test(userAgent)) {
    return true;
  }

  return false;
};

// 이미지들을 jpeg로 변환하여 zip 파일로 다운로드
const imageZipDownloader = async ({
  imageUrls,
}: {
  imageUrls: string[];
}): Promise<void> => {
  if (isMobile()) {
    // 모바일일 경우 개별 다운로드
    for (const url of imageUrls) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const fileName = url.split('/').pop() || 'image';
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error('Error processing image:', error);
        throw error;
      }
    }
  } else {
    // 모바일이 아니면 ZIP 파일로 압축하여 다운로드
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
    const zipUrl = window.URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = zipUrl;
    a.download = 'images.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(zipUrl);
  }
};

export default imageZipDownloader;
