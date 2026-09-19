import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut5kte8hs.css';
import '../../css/j/jao5a9beq.css';
import '../../css/k/kxbxmwbhq.css';
import '../../css/z/z2zy43d1o.css';
import '../../css/x/xf_984b9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ut5kte8hs"/><path class="jao5a9beq"/><path class="kxbxmwbhq"/><path class="z2zy43d1o"/><path class="xf_984b9o"/></g>`,
		"fallback": "fluent-emoji-flat:yo-yo",
	});
}

export default Component;
