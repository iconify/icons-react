import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0yuzobfb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0yuzobfb"/>`,
		"fallback": "game-icons:windy-stripes",
	});
}

export default Component;
