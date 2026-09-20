import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mun4s9bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mun4s9bhp"/>`,
		"fallback": "mdi:writing-system-hangul",
	});
}

export default Component;
