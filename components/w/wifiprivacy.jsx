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
		"content": `<style>.a0ekw-bss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.18 20.45a14.78 14.78 0 0 1 11.82-6h0a14.77 14.77 0 0 1 11.82 6m-19.41 3.18a9.49 9.49 0 0 1 7.59-4a9.49 9.49 0 0 1 7.59 4m-11.24 2.95a4.56 4.56 0 0 1 7.3 0");
}

.ps-0dvqzj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c1.69 0 15.25-7.77 15.25-16.94v-20c-4 0-15.25-2-15.25-2s-11.26 2-15.25 2v20C8.75 35.73 22.31 43.5 24 43.5");
}
</style><path class="a0ekw-bss"/><path class="ps-0dvqzj"/>`,
		"fallback": "arcticons:wifiprivacy",
	});
}

export default Component;
