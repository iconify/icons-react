import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gitql3b_n.css';
import '../../css/j/jshziwpoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gitql3b_n"/><path class="jshziwpoi"/></g>`,
		"fallback": "hugeicons:yoga-mat",
	});
}

export default Component;
