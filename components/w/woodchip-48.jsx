import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu4o8i4pj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu4o8i4pj"/>`,
		"fallback": "energy-icons:woodchip-48",
	});
}

export default Component;
