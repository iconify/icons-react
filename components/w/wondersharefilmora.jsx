import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxn06lbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxn06lbxa"/>`,
		"fallback": "simple-icons:wondersharefilmora",
	});
}

export default Component;
