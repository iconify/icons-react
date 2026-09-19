import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0tnlimht.css';
import '../../css/x/xc9imsb1x.css';
import '../../css/f/f_84nivhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0tnlimht"/><path class="xc9imsb1x"/><path class="f_84nivhg"/>`,
		"fallback": "cryptocurrency:zil",
	});
}

export default Component;
