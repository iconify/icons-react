import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ec3wo6b2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.348 10.583l15.263-.008a1.215 1.215 0 0 1 1.073 1.786L24.952 26.88a1.081 1.081 0 0 1-1.907.002L15.278 12.37a1.214 1.214 0 0 1 1.07-1.786Z");
}

.rapic-b9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.836 11.62l10.946 28.955h2.43l10.952-28.959");
}
</style><circle class="cpk0fnbgt"/><path class="rapic-b9s"/><path class="ec3wo6b2h"/>`,
		"fallback": "arcticons:youtube-revanced",
	});
}

export default Component;
