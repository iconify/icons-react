import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn427hbtf.css';

const viewBox = {"width":1537,"height":1537};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn427hbtf"/>`,
		"fallback": "wi:wind-direction-n",
	});
}

export default Component;
