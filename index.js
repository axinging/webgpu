import nodeGPUBinding from 'bindings';

let nodeGPU = null;
export function getNodeGPU() {
  if (nodeGPU) {
    return nodeGPU;
  }
  const gpuProviderModule = nodeGPUBinding('dawn');
  const gpuProviderFlags = ['disable-dawn-features=disallow_unsafe_apis'];
  nodeGPU = gpuProviderModule.create(gpuProviderFlags);
  return nodeGPU;
}
