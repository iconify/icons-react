import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz7z45dsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz7z45dsg"/>`,
		"fallback": "si:widget-fill",
	});
}

export default Component;
