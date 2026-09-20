import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0maw-bnl.css';

const viewBox = {"width":841.89,"height":595.28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0maw-bnl"/>`,
		"fallback": "thesvg-color:xai-grok-dark",
	});
}

export default Component;
