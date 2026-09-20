import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so1_l98cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so1_l98cp"/>`,
		"fallback": "simple-icons:wegame",
	});
}

export default Component;
