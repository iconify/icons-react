import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew6x_87ns.css';
import '../../css/l/lfj5m2b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew6x_87ns"/><path class="lfj5m2b1j"/>`,
		"fallback": "mage:whatsapp",
	});
}

export default Component;
