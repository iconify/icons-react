import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6qqye7ob.css';
import '../../css/o/oxdpjjuzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6qqye7ob"/><path class="oxdpjjuzl"/>`,
		"fallback": "mingcute:whistle-line",
	});
}

export default Component;
