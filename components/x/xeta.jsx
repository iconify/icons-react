import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxbw-6bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxbw-6bar"/>`,
		"fallback": "token:xeta",
	});
}

export default Component;
