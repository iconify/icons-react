import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh34l6hzf.css';
import '../../css/q/qgp7_3b3s.css';
import '../../css/l/lwo1bn0tv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh34l6hzf"/><path class="qgp7_3b3s"/><path class="lwo1bn0tv"/>`,
		"fallback": "devicon:web3js",
	});
}

export default Component;
