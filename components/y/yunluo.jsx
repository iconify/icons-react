import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6h9g5kbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6h9g5kbp"/>`,
		"fallback": "game-icons:yunluo",
	});
}

export default Component;
