import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeaj4ri2b.css';
import '../../css/x/xn9gzsb0y.css';
import '../../css/h/hlj3itbhb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeaj4ri2b"/><path class="xn9gzsb0y"/><path class="hlj3itbhb"/>`,
		"fallback": "energy-icons:yoga-48",
	});
}

export default Component;
