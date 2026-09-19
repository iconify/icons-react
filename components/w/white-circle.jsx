import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drkpzc5wd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drkpzc5wd"/>`,
		"fallback": "fluent-emoji-high-contrast:white-circle",
	});
}

export default Component;
