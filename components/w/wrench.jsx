import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkz-23bre.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkz-23bre"/>`,
		"fallback": "streamline:wrench",
	});
}

export default Component;
