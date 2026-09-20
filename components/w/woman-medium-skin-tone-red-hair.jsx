import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz7oi0bvh.css';
import '../../css/p/po26b3b4u.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/d/dqfgcrbcx.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/g/gp34679_b.css';
import '../../css/q/q3aj0vory.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz7oi0bvh"/><path class="po26b3b4u"/><path class="amn_b-_3e"/><path class="dqfgcrbcx"/><path class="wkz0_n5gi"/><path class="gp34679_b"/><path class="q3aj0vory"/>`,
		"fallback": "openmoji:woman-medium-skin-tone-red-hair",
	});
}

export default Component;
