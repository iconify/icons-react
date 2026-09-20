import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s55tejb6b.css';

const viewBox = {"width":1534,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s55tejb6b"/>`,
		"fallback": "wi:wind-direction-e",
	});
}

export default Component;
