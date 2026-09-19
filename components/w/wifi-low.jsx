import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4cec1b5g.css';
import '../../css/d/dijuj1icq.css';
import '../../css/n/n7436gv2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="i4cec1b5g"><path class="dijuj1icq"/><path class="n7436gv2b"/></g>`,
		"fallback": "grommet-icons:wifi-low",
	});
}

export default Component;
