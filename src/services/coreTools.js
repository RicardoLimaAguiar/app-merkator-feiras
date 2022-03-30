import { useCallback } from 'react';

const coreTools = () =>{
  
  const switchSizeImage = useCallback((image, size) => {
    const separateString = image.split('/uploads/media/');
    return (
      separateString[0] + '/uploads/media/' + size + '/' + separateString[1]
    );
  });

  return { switchSizeImage }

}

export default coreTools;