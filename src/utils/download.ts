export const downloadBlobFile = (
  blobStream: Blob,
  blobType: string,
  fileName: string
) => {
  const blob = new Blob([blobStream], { type: blobType });
  const objectUrl = URL.createObjectURL(blob); // 创建一个指向 blob 的 URL
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(objectUrl); // 释放 blob URL
};
