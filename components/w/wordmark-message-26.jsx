import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he76okbwy.css';

const viewBox = {"width":94,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he76okbwy"/>`,
		"fallback": "garden:wordmark-message-26",
	});
}

export default Component;
