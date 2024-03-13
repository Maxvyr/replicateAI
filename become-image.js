const model =
  "fofr/become-image:42cf9559131f57f018bf8cdc239a74f4871c5852045ce8f23b346e4ef8f56aa8";

const becomeImage = async (
  replicate,
  imageFrom,
  imageTo,
  positivePrompt,
  negativePrompt
) => {
  const input = {
    image: imageFrom,
    prompt: positivePrompt,
    image_to_become: imageTo,
    negative_prompt: negativePrompt,
    prompt_strength: 2,
    number_of_images: 2,
    denoising_strength: 1,
    instant_id_strength: 1,
    image_to_become_noise: 0.3,
    control_depth_strength: 0.8,
    image_to_become_strength: 0.75,
  };

  return await replicate.run(model, {
    input: input,
  });
  // [
  //   'https://replicate.delivery/pbxt/t52kH98nx8pnKZLIseewcgTmiqVmhb390qAJfeynuOYcNUfTC/ComfyUI_00001_.png',
  //   'https://replicate.delivery/pbxt/EyfMAbn0TXSDOS4UUeSIV77qIxGb62NJF8eK8xARQEWwGqfJB/ComfyUI_00002_.png'
  // ]
};

export default becomeImage;
