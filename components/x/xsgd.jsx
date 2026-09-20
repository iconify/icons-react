import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6qqj612f.css';
import '../../css/m/myg6gcb0a.css';
import '../../css/o/oi8ocx2dy.css';
import '../../css/i/i96sxrg6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6qqj612f"/><path class="myg6gcb0a"/><path clip-rule="evenodd" class="oi8ocx2dy"/><path class="i96sxrg6g"/>`,
		"fallback": "token:xsgd",
	});
}

export default Component;
