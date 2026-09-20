import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6uo6sbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6uo6sbpb"/>`,
		"fallback": "mdi:wifi-strength-2-lock",
	});
}

export default Component;
