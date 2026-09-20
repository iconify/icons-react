import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb1lvnu1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb1lvnu1m"/>`,
		"fallback": "lucide:wrench-off",
	});
}

export default Component;
