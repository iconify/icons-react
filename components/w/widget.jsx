import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d5s_h13yn.css';
import '../../css/j/jaft18bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="d5s_h13yn"/><path vector-effect="non-scaling-stroke" class="jaft18bfa"/></g>`,
		"fallback": "wordpress:widget",
	});
}

export default Component;
