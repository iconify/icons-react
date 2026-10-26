import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zn1y11bwk.css';
import '../../css/f/fgs250bqb.css';
import '../../css/x/x2a0rsbin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zn1y11bwk"/><path class="fgs250bqb"/><path class="x2a0rsbin"/></g>`,
		"fallback": "doodle-icons:witch-hat",
	});
}

export default Component;
