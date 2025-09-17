import { Button, DownloadTrigger } from '@chakra-ui/react'
import React from 'react'

export default function ResumeDownload({ resumeUrl }) {
  
    const dataPromise = async () => {
        const res = await fetch(resumeUrl)
        if (!res.ok) throw new Error('Failed to fetch resume')
        return res.blob()
    }

  return (
    <DownloadTrigger data={dataPromise} fileName='Udara_Athauda_Resume.pdf' mimeType='application/pdf' asChild>
      <Button variant={'subtle'} colorPalette={'purple'}>Download Resume</Button>
    </DownloadTrigger>
  )
}
