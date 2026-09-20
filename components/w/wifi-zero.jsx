import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kneeq5ung.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kneeq5ung"/>`,
		"fallback": "lucide:wifi-zero",
	});
}

export default Component;
