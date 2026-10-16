import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl75yhb6l.css';
import '../../css/u/uqpad_ykf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl75yhb6l"/><path class="uqpad_ykf"/>`,
		"fallback": "energy-icons:workflow-20",
	});
}

export default Component;
