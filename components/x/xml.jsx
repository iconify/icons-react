import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db4q_xbwf.css';
import '../../css/x/xvie58q8q.css';
import '../../css/g/gggqxnbbb.css';
import '../../css/g/g7k0f042f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db4q_xbwf"/><path class="xvie58q8q"/><path class="gggqxnbbb"/><path class="g7k0f042f"/>`,
		"fallback": "devicon:xml",
	});
}

export default Component;
