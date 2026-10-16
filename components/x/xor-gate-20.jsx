import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gza0lnxru.css';
import '../../css/e/e6mnr5buq.css';
import '../../css/j/jcyd-oqqf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gza0lnxru"/><path class="e6mnr5buq"/><path class="jcyd-oqqf"/>`,
		"fallback": "energy-icons:xor-gate-20",
	});
}

export default Component;
