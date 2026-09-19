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
		"content": `<style>.s9fkwsglj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.531 12.22H35.47L12.53 35.78h22.94m-11.47 0v7.72m0-39v7.72");
}
</style><path class="s9fkwsglj"/>`,
		"fallback": "arcticons:zelle",
	});
}

export default Component;
