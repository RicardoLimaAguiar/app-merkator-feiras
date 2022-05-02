import { useCallback } from 'react';

const coreTools = () =>{
  
  const switchSizeImage = useCallback((image, size) => {
    const separateString = image.split('/uploads/media/');
    return (
      separateString[0] + '/uploads/media/' + size + '/' + separateString[1]
    );
  });

  const convertToSlug = useCallback((Text) => {
    return Text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  });

  return { switchSizeImage, convertToSlug }

}

export default coreTools;