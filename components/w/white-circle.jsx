import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvn-hjbuz.css';
import '../../css/o/on8px-b6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zvn-hjbuz"/><path class="on8px-b6n"/></g>`,
		"fallback": "fluent-emoji-flat:white-circle",
	});
}

export default Component;
