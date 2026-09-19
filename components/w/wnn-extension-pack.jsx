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
		"content": `<style>.feh4kybxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.444 43.315A21.5 21.5 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24a21.5 21.5 0 0 1-2.177 9.428");
}

.mm32_-dlt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.503 11.516c-4.39-1.856-5.813 6.41-6.096 8.528c-.324 2.424-.151 27.62 11.819.83c-2.674 15.498 1.018 25.59 13.563 2.286");
}

.nytjl9xfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.499 38.5h2.61m1.391 4h-4v-8h4");
}

.um64usbru {
  cx: 38.499px;
  cy: 38.5px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="feh4kybxh"/><path class="mm32_-dlt"/><circle class="um64usbru"/><path class="nytjl9xfz"/>`,
		"fallback": "arcticons:wnn-extension-pack",
	});
}

export default Component;
