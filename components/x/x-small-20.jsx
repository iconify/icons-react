import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufby36brl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufby36brl"/>`,
		"fallback": "garden:x-small-20",
	});
}

export default Component;
