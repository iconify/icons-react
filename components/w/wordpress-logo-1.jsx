import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dmb8omyes.css';
import '../../css/s/swe-3q-nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dmb8omyes"/><path class="swe-3q-nj"/></g>`,
		"fallback": "streamline-ultimate:wordpress-logo-1",
	});
}

export default Component;
