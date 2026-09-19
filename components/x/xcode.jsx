import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai-0czjuy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai-0czjuy"/>`,
		"fallback": "cib:xcode",
	});
}

export default Component;
