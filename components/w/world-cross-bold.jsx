import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jxoyled8w.css';
import '../../css/r/r5wn8pbwo.css';
import '../../css/c/ct4i-fb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jxoyled8w"/><path class="r5wn8pbwo"/><path class="ct4i-fb4t"/></g>`,
		"fallback": "streamline-ultimate:world-cross-bold",
	});
}

export default Component;
