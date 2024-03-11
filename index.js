import Replicate from "replicate";
const replicate = new Replicate({
  auth: "r8_clWya1119sNxyzCRKFdEMoC9c2IXOWv1AtcsN",
});

const model =
  "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";
const input = {
  prompt: "Hatsune Miku on top of a mountain",
};
console.log("⌚ Starting Inference ⌚...");
const output = await replicate.run(model, { input });
console.log(output); //['https://replicate.delivery/pbxt/S8c7YMzSTuLyNlGcyPqNNZVNRBevavb8VTLr6Wcke0hiIPfkA/out-0.png']
console.log("END 🔚");
