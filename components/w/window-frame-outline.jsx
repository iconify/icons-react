import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ytuur1g.css';
import '../../css/i/iszoktbeh.css';
import '../../css/y/yez_mgb3n.css';
import '../../css/a/acs2urb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ytuur1g"/><path class="iszoktbeh"/><path class="yez_mgb3n"/><path clip-rule="evenodd" class="acs2urb_h"/>`,
		"fallback": "solar:window-frame-outline",
	});
}

export default Component;
