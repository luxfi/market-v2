import '@google/model-viewer'

const ModelViewer = ({ glb = '/models/Lux.glb' }) => (
  <div className="h-full w-full">
    <model-viewer
      src={glb}
      ios-src=""
      alt="Lux"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      rotation-per-second="30deg"
      ar-modes="scene-viewer webxr"
      ar
    ></model-viewer>
  </div>
)

export default ModelViewer
