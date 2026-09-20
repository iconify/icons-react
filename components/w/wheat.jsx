import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy5we8etf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy5we8etf"/>`,
		"fallback": "streamline-plump:wheat",
	});
}

export default Component;
