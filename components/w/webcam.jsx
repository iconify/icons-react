import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p5aswobnw.css';
import '../../css/w/w0e46ufpc.css';
import '../../css/j/j-mlh2z9t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p5aswobnw"/><path class="w0e46ufpc"/><path class="j-mlh2z9t"/></g>`,
		"fallback": "streamline:webcam",
	});
}

export default Component;
