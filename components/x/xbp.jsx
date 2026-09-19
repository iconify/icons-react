import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aiy-2315c.css';
import '../../css/v/vv54o2phj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="aiy-2315c"/><path class="vv54o2phj"/></g>`,
		"fallback": "cryptocurrency-color:xbp",
	});
}

export default Component;
