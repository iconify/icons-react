import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzr2p1b8f.css';
import '../../css/a/aen1w6b6m.css';
import '../../css/v/vi3rgwb9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzr2p1b8f"/><path class="aen1w6b6m"/><path class="vi3rgwb9r"/>`,
		"fallback": "fxemoji:whitetouchtonephone",
	});
}

export default Component;
