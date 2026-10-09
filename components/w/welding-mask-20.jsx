import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_07w6bdi.css';
import '../../css/s/s2rg5k4vy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_07w6bdi"/><path class="s2rg5k4vy"/>`,
		"fallback": "energy-icons:welding-mask-20",
	});
}

export default Component;
