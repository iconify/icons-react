import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/la_plbbrz.css';
import '../../css/w/wz3bazbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="la_plbbrz"/><path class="wz3bazbbn"/></g>`,
		"fallback": "streamline-cyber:window-application-6",
	});
}

export default Component;
