import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0l6vme3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0l6vme3s"/>`,
		"fallback": "fluent-emoji-high-contrast:woman-climbing",
	});
}

export default Component;
