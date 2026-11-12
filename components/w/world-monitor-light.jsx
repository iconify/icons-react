import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdofmibhs.css';
import '../../css/t/trvimmbgr.css';
import '../../css/d/ds9su0blt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdofmibhs"/><path class="trvimmbgr"/><circle class="ds9su0blt"/>`,
		"fallback": "selfhst:world-monitor-light",
	});
}

export default Component;
