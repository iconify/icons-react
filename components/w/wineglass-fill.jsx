import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsbll9bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsbll9bro"/>`,
		"fallback": "mingcute:wineglass-fill",
	});
}

export default Component;
