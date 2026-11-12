import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2qr42b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2qr42b_y"/>`,
		"fallback": "wordpress:word-count",
	});
}

export default Component;
