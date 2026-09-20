import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdofmibhs.css';
import '../../css/k/kcdmr56ch.css';
import '../../css/u/u8e9kpb9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdofmibhs"/><path class="kcdmr56ch"/><circle class="u8e9kpb9d"/>`,
		"fallback": "selfhst:world-monitor-light",
	});
}

export default Component;
