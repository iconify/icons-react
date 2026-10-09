import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga00bibxt.css';
import '../../css/u/u1d_hjplu.css';
import '../../css/o/oiqizvb8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga00bibxt"/><path class="u1d_hjplu"/><path class="oiqizvb8s"/>`,
		"fallback": "energy-icons:wind-sock-48",
	});
}

export default Component;
