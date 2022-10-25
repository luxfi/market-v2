import useDetails from 'hooks/useDetails'
import { optimizeImage } from 'lib/optmizeImage'
import Script from 'next/script'
import { FC } from 'react'

type Props = {
<<<<<<< HEAD
  token?: TokenDetails
<<<<<<< HEAD
}

const TokenMedia: FC<Props> = ({ token }) => {
  return (
    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      {token?.media === null ? (
        <img
          alt="Token Image"
=======
=======
  details: ReturnType<typeof useDetails>
>>>>>>> 79e0b24 (Update look and feel)
  tokenOpenSea: {
    animation_url: string | null
    extension: string | null
  }
}

const TokenMedia: FC<Props> = ({ details, tokenOpenSea }) => {
  const token = details.data?.tokens?.[0]

  return (
    <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-2">
      {tokenOpenSea?.extension === null ? (
        <img
>>>>>>> d73def8 (initial commit)
          className="w-full rounded-2xl"
          src={optimizeImage(token?.token?.image, 533)}
        />
      ) : (
        <Media
<<<<<<< HEAD
          media={token?.media as string}
=======
          tokenOpenSea={tokenOpenSea}
<<<<<<< HEAD
>>>>>>> d73def8 (initial commit)
          tokenImage={optimizeImage(token?.image, 533)}
=======
          tokenImage={optimizeImage(token?.token?.image, 533)}
>>>>>>> 79e0b24 (Update look and feel)
        />
      )}
    </div>
  )
}

export default TokenMedia

const Media: FC<{
<<<<<<< HEAD
  media: string
  tokenImage: string
}> = ({ media, tokenImage }) => {
  const matches = media.match('(\\.[^.]+)$')
  const extension = matches ? matches[0].replace('.', '') : null
=======
  tokenOpenSea: {
    animation_url: any
    extension: any
  }
  tokenImage: string
}> = ({ tokenOpenSea, tokenImage }) => {
  const { animation_url, extension } = tokenOpenSea
>>>>>>> d73def8 (initial commit)

  // VIDEO
  if (extension === 'mp4') {
    return (
<<<<<<< HEAD
      <video className="mb-4 w-full rounded" poster={tokenImage} controls>
        <source src={media} type="video/mp4" />
=======
      <video className="mb-4 w-[533px]" controls>
        <source src={animation_url} type="video/mp4" />
>>>>>>> d73def8 (initial commit)
        Your browser does not support the
        <code>video</code> element.
      </video>
    )
  }

  // AUDIO
  if (extension === 'wav' || extension === 'mp3') {
    return (
      <div>
<<<<<<< HEAD
        <img
          alt="Token Audio"
          className="mb-4 w-[533px] rounded-2xl"
          src={tokenImage}
        />
        <audio className="mb-4 w-full" controls src={media}>
=======
        <img className="mb-4 w-[533px] rounded-2xl" src={tokenImage} />
        <audio className="mb-4 w-full" controls src={animation_url}>
>>>>>>> d73def8 (initial commit)
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    )
  }

  // 3D
  if (extension === 'gltf' || extension === 'glb') {
    return (
      <model-viewer
<<<<<<< HEAD
        src={media}
        ar
        ar-modes="webxr scene-viewer quick-look"
=======
        src={animation_url}
        ar
        ar-modes="webxr scene-viewer quick-look"
        // environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
>>>>>>> d73def8 (initial commit)
        poster={tokenImage}
        seamless-poster
        shadow-intensity="1"
        camera-controls
        enable-pan
      ></model-viewer>
    )
  }

<<<<<<< HEAD
  //Image
  if (
    extension === 'png' ||
    extension === 'jpeg' ||
    extension === 'jpg' ||
    extension === 'gif'
  ) {
    return (
      <img
        alt="Token Image"
        className="w-full rounded-2xl"
        src={optimizeImage(media, 533)}
      />
    )
  }

=======
>>>>>>> d73def8 (initial commit)
  // HTML
  if (
    extension === 'html' ||
    extension === undefined ||
    extension === 'other'
  ) {
    return (
      <iframe
        className="mb-6 aspect-square w-full"
        height="533"
        width="533"
<<<<<<< HEAD
        src={media}
=======
        src={animation_url}
>>>>>>> d73def8 (initial commit)
        sandbox="allow-scripts"
      ></iframe>
    )
  }

<<<<<<< HEAD
  return (
    <img
      alt="Token Image"
      className="w-full rounded-2xl"
      src={optimizeImage(tokenImage, 533)}
    />
  )
=======
  return null
>>>>>>> d73def8 (initial commit)
}
