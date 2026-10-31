import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-m-5x5bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-m-5x5bx"/>`,
		"fallback": "coolicons:webhook-fill-round",
	});
}

export default Component;
