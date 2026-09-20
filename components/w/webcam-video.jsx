import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkb3oqbwk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkb3oqbwk"/>`,
		"fallback": "streamline:webcam-video",
	});
}

export default Component;
