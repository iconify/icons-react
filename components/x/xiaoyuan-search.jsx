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
		"content": `<style>.js9r1-b_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.501 42.5l-7.351-7.776a17.244 17.244 0 1 0-7.075 4.422");
}
</style><path class="js9r1-b_o"/>`,
		"fallback": "arcticons:xiaoyuan-search",
	});
}

export default Component;
