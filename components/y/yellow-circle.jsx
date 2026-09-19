import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakis3b0t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iakis3b0t"/>`,
		"fallback": "fluent-emoji-flat:yellow-circle",
	});
}

export default Component;
