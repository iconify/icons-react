import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anhh36llh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anhh36llh"/>`,
		"fallback": "mdi:wind-power-check",
	});
}

export default Component;
