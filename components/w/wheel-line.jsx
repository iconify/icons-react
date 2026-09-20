import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3z640blx.css';
import '../../css/g/givwvqkqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3z640blx"/><path class="givwvqkqt"/>`,
		"fallback": "mingcute:wheel-line",
	});
}

export default Component;
