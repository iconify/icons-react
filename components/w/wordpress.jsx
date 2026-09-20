import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc1h7abdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc1h7abdk"/>`,
		"fallback": "uil:wordpress",
	});
}

export default Component;
