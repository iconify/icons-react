import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp43ed8br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp43ed8br"/>`,
		"fallback": "mdi:widget-pie-outline",
	});
}

export default Component;
