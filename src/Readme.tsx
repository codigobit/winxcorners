import React, {useEffect, useState} from 'react'
import { fetchReadme } from '@varandas/fetch-readme'
import ReactMarkdown from 'react-markdown'

function Readme() {

  const [result, setResult] = useState([])

  useEffect(() => {
    fetchReadme({
    username: 'vhanla',
    repository: 'winxcorners',
    }).then((response: any) => setResult(response))
  }, [])

  return (
    <div className="readme">
      <ReactMarkdown source={result.toString()} />
    </div>
  )
}

export default Readme
