import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgsozi8rl.css';

const viewBox = {"width":2208,"height":1440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgsozi8rl"/>`,
		"fallback": "vs:yahoo-japan",
	});
}

export default Component;
