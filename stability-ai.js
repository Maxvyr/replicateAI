const model =
  "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";

const stabilityAI = async (replicate, prompt) => {
  const input = {
    prompt: prompt,
  };

  return await replicate.run(model, { input });
  //['https://replicate.delivery/pbxt/S8c7YMzSTuLyNlGcyPqNNZVNRBevavb8VTLr6Wcke0hiIPfkA/out-0.png']
};
