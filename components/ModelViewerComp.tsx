import '@google/model-viewer'

const ModelViewerComp = ({ glb = '/luxfinal.glb', alt = 'Lux' }) => (
  <div className="h-full w-full">
    <model-viewer
      src={glb}
      ios-src=""
      alt={alt}
      shadow-intensity="1"
      camera-controls
      auto-rotate
      rotation-per-second="30deg"
      ar-modes="scene-viewer webxr"
      ar
    ></model-viewer>
  </div>
)

export default ModelViewerComp
