export let svgLogo = {
  src: 'data:image/png;base64,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'
};