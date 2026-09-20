import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw1pi9cpe.css';
import '../../css/l/ldcc6fbjt.css';
import '../../css/i/in_j66beg.css';
import '../../css/p/psw28h88l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw1pi9cpe"/><path class="ldcc6fbjt"/><path class="in_j66beg"/><path class="psw28h88l"/>`,
		"fallback": "thesvg-color:yuanbao",
	});
}

export default Component;
