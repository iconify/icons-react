import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2p8dyb2p.css';
import '../../css/w/wn54x-yav.css';
import '../../css/k/kw88p8b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k2p8dyb2p"/><path class="wn54x-yav"/><path class="kw88p8b_o"/>`,
		"fallback": "solar:wineglass-triangle-bold-duotone",
	});
}

export default Component;
