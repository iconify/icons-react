import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_ysxsbaw.css';

const viewBox = {"width":47,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_ysxsbaw"/>`,
		"fallback": "garden:wordmark-chat-26",
	});
}

export default Component;
