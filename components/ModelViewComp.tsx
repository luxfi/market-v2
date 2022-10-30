import '@google/model-viewer'

const ModelViewComp = ({
  glb = '/luxfinal.glb',
  alt = 'Lux',
  usdz = '',
  shadowIntensity = '1',
  rotationPerSecond = '30deg',
}) => (
  <div className="h-full w-full">
    <model-viewer
      src={glb}
      ios-src={usdz}
      alt={alt}
      shadow-intensity={shadowIntensity}
      camera-controls
      rotation-per-second={rotationPerSecond}
      ar-modes="scene-viewer webxr"
      ar
    ></model-viewer>
  </div>
)

export default ModelViewComp
