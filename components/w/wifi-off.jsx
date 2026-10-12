import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnd9hybje.css';
import '../../css/x/xwm1vhbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dnd9hybje"/><path class="xwm1vhbzg"/></g>`,
		"fallback": "andrsrxn:wifi-off",
	});
}

export default Component;
