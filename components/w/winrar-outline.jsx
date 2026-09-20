import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lof-am1yz.css';
import '../../css/p/pky0achnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lof-am1yz"/><path clip-rule="evenodd" class="pky0achnd"/>`,
		"fallback": "solar:winrar-outline",
	});
}

export default Component;
