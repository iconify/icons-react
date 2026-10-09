import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/c/ckg4d6bbp.css';
import '../../css/f/fc94zsbwe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="ckg4d6bbp"/><path class="fc94zsbwe"/>`,
		"fallback": "energy-icons:x-circle-20",
	});
}

export default Component;
