import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhiy8ctqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hhiy8ctqx"/>`,
		"fallback": "healthicons:weight-outline-24px",
	});
}

export default Component;
