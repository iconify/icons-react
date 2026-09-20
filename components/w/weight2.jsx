import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k__wu0p8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k__wu0p8h"/>`,
		"fallback": "reicon:weight2",
	});
}

export default Component;
