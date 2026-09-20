import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9z0pybyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9z0pybyu"/>`,
		"fallback": "selfhst:worklenz-light",
	});
}

export default Component;
