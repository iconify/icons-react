import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooqpa4igp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooqpa4igp"/>`,
		"fallback": "energy-icons:wind-rose-48",
	});
}

export default Component;
