import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfqgc9bqn.css';

const viewBox = {"width":841.89,"height":595.28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfqgc9bqn"/>`,
		"fallback": "thesvg-color:xai-grok-light",
	});
}

export default Component;
