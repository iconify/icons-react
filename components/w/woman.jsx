import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amn_b-_3e.css';
import '../../css/x/x5mwsacqi.css';
import '../../css/a/ao3oc6kdn.css';
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
		"content": `<path class="amn_b-_3e"/><path class="x5mwsacqi"/><path class="ao3oc6kdn"/><path class="dqfgcrbcx"/><path class="wkz0_n5gi"/><path class="gp34679_b"/><path class="q3aj0vory"/>`,
		"fallback": "openmoji:woman",
	});
}

export default Component;
