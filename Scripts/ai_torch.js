const sess = new onnx.InferenceSession();
const loadingModelPromise = sess.loadModel("../FremdHack_2024_JAAR/onnx_model.onnx");