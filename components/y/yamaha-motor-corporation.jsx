import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzkp8bbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzkp8bbpu"/>`,
		"fallback": "thesvg-color:yamaha-motor-corporation",
	});
}

export default Component;
