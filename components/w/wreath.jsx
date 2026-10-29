import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o3y722rod.css';
import '../../css/n/n9ti5j9_g.css';
import '../../css/y/y57d06b0a.css';
import '../../css/r/r_u39dbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o3y722rod wm-k"/><path class="n9ti5j9_g wm-a"/><path class="y57d06b0a"/><path class="r_u39dbfu"/></g>`,
		"fallback": "withicons-bauhaus:wreath",
	});
}

export default Component;
