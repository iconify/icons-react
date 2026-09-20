import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl69o2b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl69o2b0l"/>`,
		"fallback": "lucide:wifi-pen",
	});
}

export default Component;
