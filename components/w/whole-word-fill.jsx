import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mubdudhjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mubdudhjp"/>`,
		"fallback": "keyline-icons:whole-word-fill",
	});
}

export default Component;
