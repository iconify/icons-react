import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akiv3lb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akiv3lb2x"/>`,
		"fallback": "ri:weight-line",
	});
}

export default Component;
