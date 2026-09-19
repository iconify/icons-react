import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2bd161_c.css';
import '../../css/w/w25rgrb9f.css';
import '../../css/i/id02ik75h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c2bd161_c"/><path class="w25rgrb9f"/><path class="id02ik75h"/></g>`,
		"fallback": "fluent-emoji-flat:whale",
	});
}

export default Component;
