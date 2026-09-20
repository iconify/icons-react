import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amn_b-_3e.css';
import '../../css/g/g-m7x-dct.css';
import '../../css/n/nqgzi3bra.css';
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
		"content": `<path class="amn_b-_3e"/><path class="g-m7x-dct"/><path class="nqgzi3bra"/><path class="dqfgcrbcx"/><path class="wkz0_n5gi"/><path class="gp34679_b"/><path class="q3aj0vory"/>`,
		"fallback": "openmoji:woman-light-skin-tone",
	});
}

export default Component;
