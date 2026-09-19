import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brvau-b8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brvau-b8i"/>`,
		"fallback": "cil:yen",
	});
}

export default Component;
