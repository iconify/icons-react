import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy-dcnr9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy-dcnr9c"/>`,
		"fallback": "streamline-ultimate:workflow-exit-door-bold",
	});
}

export default Component;
