import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd4un3bxh.css';
import '../../css/k/kuajdcb1m.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/n/nnh8hsciz.css';
import '../../css/z/zpt1uxb_e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd4un3bxh"/><path class="kuajdcb1m"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="nnh8hsciz"/><path class="zpt1uxb_e"/>`,
		"fallback": "openmoji:woman-dark-skin-tone-curly-hair",
	});
}

export default Component;
