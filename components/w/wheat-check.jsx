import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpwl4nrhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpwl4nrhi"/>`,
		"fallback": "noviair-light:wheat-check",
	});
}

export default Component;
