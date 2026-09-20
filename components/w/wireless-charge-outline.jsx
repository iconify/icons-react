import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf3k0wf1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bf3k0wf1t"/>`,
		"fallback": "solar:wireless-charge-outline",
	});
}

export default Component;
