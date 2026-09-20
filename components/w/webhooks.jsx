import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfn4-gb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sfn4-gb0z"/>`,
		"fallback": "lineicons:webhooks",
	});
}

export default Component;
