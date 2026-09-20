import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jjrnycbjk.css';
import '../../css/n/n2xbvfc4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jjrnycbjk"/><path class="n2xbvfc4b"/></g>`,
		"fallback": "tabler:zeppelin",
	});
}

export default Component;
