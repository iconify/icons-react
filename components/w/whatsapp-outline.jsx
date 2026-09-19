import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2llag50o.css';
import '../../css/l/lq4vgwbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2llag50o"/><path clip-rule="evenodd" class="lq4vgwbul"/>`,
		"fallback": "basil:whatsapp-outline",
	});
}

export default Component;
