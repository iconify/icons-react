import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktcjmyg5d.css';
import '../../css/i/isi39nobh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktcjmyg5d"/><path class="isi39nobh"/>`,
		"fallback": "bxl:whatsapp-square",
	});
}

export default Component;
