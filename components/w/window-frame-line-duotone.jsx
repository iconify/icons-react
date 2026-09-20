import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/t/tm6q8mbbb.css';
import '../../css/q/qdnildxhg.css';
import '../../css/p/pgoacybzz.css';
import '../../css/r/ryg9aovix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="tm6q8mbbb"/><path class="qdnildxhg"/><path class="pgoacybzz"/><path class="ryg9aovix"/></g>`,
		"fallback": "solar:window-frame-line-duotone",
	});
}

export default Component;
