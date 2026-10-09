import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o787acb6i.css';
import '../../css/u/u-8yf-b3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o787acb6i"/><path class="u-8yf-b3q"/>`,
		"fallback": "energy-icons:whistle-48-bold",
	});
}

export default Component;
