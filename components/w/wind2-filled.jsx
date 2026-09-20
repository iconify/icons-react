import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8xg3v5yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8xg3v5yh"/>`,
		"fallback": "reicon:wind2-filled",
	});
}

export default Component;
