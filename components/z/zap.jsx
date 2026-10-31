import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dwofcl9lg.css';
import '../../css/t/ty2mjjbcy.css';
import '../../css/x/x7jj6pb9n.css';
import '../../css/p/pg90acbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dwofcl9lg wm-shadow"/><path class="ty2mjjbcy wm-shadow"/><path class="x7jj6pb9n"/><path class="pg90acbog"/></g>`,
		"fallback": "withicons-brutal:zap",
	});
}

export default Component;
