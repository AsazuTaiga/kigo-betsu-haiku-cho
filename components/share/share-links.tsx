import { useEffect, useState } from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
} from 'react-share'

const ShareLinks: React.VFC = () => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(location.href)
  })
  return (
    <>
      <div className="shareLinks">
        <TwitterShareButton url={url}>
          <TwitterIcon size="32px" round={true}></TwitterIcon>
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon size="32px" round={true}></FacebookIcon>
        </FacebookShareButton>
        <LineShareButton url={url}>
          <LineIcon size="32px" round={true}></LineIcon>
        </LineShareButton>
        <HatenaShareButton url={url}>
          <HatenaIcon size="32px" round={true}></HatenaIcon>
        </HatenaShareButton>
      </div>
      <style jsx>{`
        .shareLinks {
          display: flex;
          width: 160px;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default ShareLinks
