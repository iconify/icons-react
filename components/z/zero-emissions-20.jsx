import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up69iwpxv.css';
import '../../css/o/oyfc2zkqj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up69iwpxv"/><path class="oyfc2zkqj"/>`,
		"fallback": "energy-icons:zero-emissions-20",
	});
}

export default Component;
