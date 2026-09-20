import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9r0s9wjp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9r0s9wjp"/>`,
		"fallback": "map:zoom-out-alt",
	});
}

export default Component;
