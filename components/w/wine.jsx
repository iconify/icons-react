import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i8lcihbbn.css';
import '../../css/s/sk_l22b4b.css';
import '../../css/d/ddsr2sbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i8lcihbbn"/><path class="sk_l22b4b"/><path class="ddsr2sbfs"/></g>`,
		"fallback": "streamline-sharp:wine",
	});
}

export default Component;
