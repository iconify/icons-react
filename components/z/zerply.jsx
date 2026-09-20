import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc94w3amr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc94w3amr"/>`,
		"fallback": "simple-icons:zerply",
	});
}

export default Component;
