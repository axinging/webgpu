var nodeGPUBinding = require('bindings');

var nodeGPU = (function() {
  var nodeGPUInstance;
  function createNodeGPU() {
    const gpuProviderModule = nodeGPUBinding('dawn');
    const gpuProviderFlags = ['disable-dawn-features=disallow_unsafe_apis'];
    nodeGPUInstance = gpuProviderModule.create(gpuProviderFlags);
    return nodeGPUInstance;
  }

  return {
    getNodeGPU: function() {
      if (!nodeGPUInstance) {
        nodeGPUInstance = createNodeGPU();
      }
      return nodeGPUInstance;
    }
  };
})();

module.exports = exports = nodeGPU;
