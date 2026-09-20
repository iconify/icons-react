import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-j8klbqk.css';

const viewBox = {"width":1534,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-j8klbqk"/>`,
		"fallback": "wi:wind-direction-ne",
	});
}

export default Component;
