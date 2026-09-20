import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvvrx4bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvvrx4bgz"/>`,
		"fallback": "simple-icons:web3dotjs",
	});
}

export default Component;
