import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz_y9zzsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz_y9zzsf"/>`,
		"fallback": "keyline-icons:wrench-sharp",
	});
}

export default Component;
