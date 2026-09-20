import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpw3oirif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpw3oirif"/>`,
		"fallback": "thesvg-color:zoiper",
	});
}

export default Component;
