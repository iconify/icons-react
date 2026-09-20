import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3xcrdc9x.css';
import '../../css/z/zmhz9u7sx.css';
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
		"content": `<path class="z3xcrdc9x"/><path class="zmhz9u7sx"/><path class="amn_b-_3e"/><path class="dqfgcrbcx"/><path class="wkz0_n5gi"/><path class="gp34679_b"/><path class="q3aj0vory"/>`,
		"fallback": "openmoji:woman-blond-hair",
	});
}

export default Component;
