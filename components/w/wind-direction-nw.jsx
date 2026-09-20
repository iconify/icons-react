import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq0rq6bls.css';

const viewBox = {"width":1534,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq0rq6bls"/>`,
		"fallback": "wi:wind-direction-nw",
	});
}

export default Component;
