import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn7efoaca.css';
import '../../css/f/f56ez5bwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn7efoaca"/><path class="f56ez5bwj"/>`,
		"fallback": "energy-icons:zero-emissions-48-bold",
	});
}

export default Component;
