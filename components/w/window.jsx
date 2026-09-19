import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2x0lbi2z.css';
import '../../css/y/ypz3se3da.css';
import '../../css/v/vzxgn5s_f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2x0lbi2z"/><path class="ypz3se3da"/><path class="vzxgn5s_f"/></g>`,
		"fallback": "fluent-emoji-flat:window",
	});
}

export default Component;
