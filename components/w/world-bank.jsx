import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p11wdrhxg.css';
import '../../css/c/c488girgm.css';
import '../../css/n/ng2pe5bto.css';
import '../../css/r/rxp54bc5u.css';
import '../../css/c/c4_zv0btc.css';

const viewBox = {"width":320,"height":246.858};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p11wdrhxg"/><path class="c488girgm"/><path class="ng2pe5bto"/><path transform="matrix(.9357 0 .01206 .91905 -323.102 -56.268)" class="rxp54bc5u"/><path class="c4_zv0btc"/>`,
		"fallback": "thesvg-color:world-bank",
	});
}

export default Component;
