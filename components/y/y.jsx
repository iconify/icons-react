import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxlkmqbgg.css';

const viewBox = {"width":496,"height":881};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxlkmqbgg"/>`,
		"fallback": "ls:y",
	});
}

export default Component;
