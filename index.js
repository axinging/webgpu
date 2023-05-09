var nodeGPUBinding = require('bindings');

let nodeGPU = null;
function getNodeGPU() {
  if (nodeGPU) {
    return nodeGPU;
  }
  const gpuProviderModule = nodeGPUBinding('dawn');
  const gpuProviderFlags = ['disable-dawn-features=disallow_unsafe_apis'];
  nodeGPU = gpuProviderModule.create(gpuProviderFlags);
  return nodeGPU;
}

module.exports = exports = getNodeGPU;
