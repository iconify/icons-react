import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc8sz1b-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc8sz1b-a"/>`,
		"fallback": "fluent-emoji-flat:white-exclamation-mark",
	});
}

export default Component;
