import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs3-wob5i.css';
import '../../css/a/a3mwubgrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs3-wob5i"/><path class="a3mwubgrl"/>`,
		"fallback": "selfhst:xrsh-light",
	});
}

export default Component;
