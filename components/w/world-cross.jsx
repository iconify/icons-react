import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pz3p__bod.css';
import '../../css/b/byd05hb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pz3p__bod"/><path class="byd05hb0s"/></g>`,
		"fallback": "streamline-ultimate:world-cross",
	});
}

export default Component;
