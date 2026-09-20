import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwg6iibbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwg6iibbx"/>`,
		"fallback": "streamline-ultimate:yoga-bridge-pose-2",
	});
}

export default Component;
