import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_k-1tony.css';
import '../../css/j/jnok5972w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_k-1tony"/><path class="jnok5972w"/>`,
		"fallback": "selfhst:webhook-tester-light",
	});
}

export default Component;
