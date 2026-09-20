import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eztqw9biy.css';
import '../../css/g/gcw1jebsm.css';
import '../../css/b/b7k4vkb4y.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/v/vhd6a2cbc.css';
import '../../css/g/g38q1dbeu.css';
import '../../css/u/un-wxibye.css';
import '../../css/m/mt7xmrnoc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eztqw9biy"><circle class="gcw1jebsm"/><path class="b7k4vkb4y"/></g><g class="brzn_0bpr"><ellipse class="vhd6a2cbc"/><path class="g38q1dbeu"/><path class="un-wxibye"/><path class="mt7xmrnoc"/></g>`,
		"fallback": "openmoji:woman-walking-medium-dark-skin-tone",
	});
}

export default Component;
