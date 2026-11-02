import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo7hwc55t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo7hwc55t"/>`,
		"fallback": "mingcute:world-line",
	});
}

export default Component;
