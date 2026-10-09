import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9a0osi5b.css';
import '../../css/s/s5jqyc38e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9a0osi5b"/><path class="s5jqyc38e"/>`,
		"fallback": "energy-icons:wrench-48-bold",
	});
}

export default Component;
