import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjkl8cb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hjkl8cb9p"/>`,
		"fallback": "griddy-icons:wind-energy-filled",
	});
}

export default Component;
