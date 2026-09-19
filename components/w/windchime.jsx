import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqdlc6agx.css';
import '../../css/e/e45bw9w1u.css';
import '../../css/r/r5_13j3mr.css';
import '../../css/s/sfhb73n1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqdlc6agx"/><path class="e45bw9w1u"/><path class="r5_13j3mr"/><path class="sfhb73n1r"/>`,
		"fallback": "fxemoji:windchime",
	});
}

export default Component;
