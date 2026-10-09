import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw0wqacwc.css';
import '../../css/x/x0b3z4bzv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw0wqacwc"/><path class="x0b3z4bzv"/>`,
		"fallback": "energy-icons:wifi-medium-20",
	});
}

export default Component;
