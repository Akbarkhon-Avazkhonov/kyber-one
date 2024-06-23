'use client';
import React from 'react';
import { Typography, Button, Snackbar } from '@mui/joy';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import toast from 'react-hot-toast';
const CopyText = (props: {
    textToCopy: string;
}) => {
  const handleCopy = async () => {
    toast.success('Скопировано: \n' + props.textToCopy);     
    try {
      await navigator.clipboard.writeText(props.textToCopy);
    } catch (err) {
      toast.error('Не удалось скопировать текст');     
      console.error('Не удалось скопировать текст: ', err);
    }
  };

  return (

    <ContentCopyRoundedIcon  
    onClick={handleCopy}
    sx={{ cursor: 'pointer' }}/>
        
    



  );
};

export default CopyText;
