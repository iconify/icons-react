import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiv_i_1yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiv_i_1yb"/>`,
		"fallback": "noviair:wind-turbine",
	});
}

export default Component;
