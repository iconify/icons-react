import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn_s5h0rr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn_s5h0rr"/>`,
		"fallback": "game-icons:weight-scale",
	});
}

export default Component;
