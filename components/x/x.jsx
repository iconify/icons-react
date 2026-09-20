import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sty1tsbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sty1tsbbo"/>`,
		"fallback": "lucide:x",
	});
}

export default Component;
