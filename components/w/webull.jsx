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
		"content": `<style>.r9i7jobmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.738 13.561c-1.184 9.253 11.94 11.065 17.115 11.023c6.313-.05 18.604-2.412 17.402-10.918c7.503 10.272-5.23 21.097-17.109 20.765c-12.135-.339-24.91-8.676-17.408-20.87");
}
</style><path class="r9i7jobmf"/>`,
		"fallback": "arcticons:webull",
	});
}

export default Component;
