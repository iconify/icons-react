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
		"content": `<style>.fgpgswbcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.035 14.366s-2.718 2.835-7.754 2.105c-5.42-.787-8.21-6.066-12.52-2.707C12.705 6.488 15.54 4.5 20.573 4.5s8.206 5.16 9.01 7.149c-4.146 3.003-6.627-5.006-12.718-2.017");
}

.ku0obqbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.756 12.664c-6.218 6.81-15.947 8.248-15.947 18.865c0 9.137 4.794 11.971 10.533 11.971c5.315 0 9.898-4.695 9.898-11.97c0-8.038-6.684-11.845-6.684-11.845");
}
</style><path class="ku0obqbnv"/><path class="fgpgswbcn"/>`,
		"fallback": "arcticons:whole-foods-market",
	});
}

export default Component;
