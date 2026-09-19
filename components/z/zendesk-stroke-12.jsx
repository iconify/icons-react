import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwv93cc7w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwv93cc7w"/>`,
		"fallback": "garden:zendesk-stroke-12",
	});
}

export default Component;
