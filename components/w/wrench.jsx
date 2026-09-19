import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcxjgacqx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcxjgacqx"/>`,
		"fallback": "dinkie-icons:wrench",
	});
}

export default Component;
