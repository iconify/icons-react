import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz8xdsbdv.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz8xdsbdv"/>`,
		"fallback": "ps:yahoo-messenger",
	});
}

export default Component;
