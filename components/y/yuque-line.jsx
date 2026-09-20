import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxk8nxb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxk8nxb5e"/>`,
		"fallback": "ri:yuque-line",
	});
}

export default Component;
