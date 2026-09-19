import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo7efloty.css';

const viewBox = {"width":503,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo7efloty"/>`,
		"fallback": "ls:z-upper-case",
	});
}

export default Component;
