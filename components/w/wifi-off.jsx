import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnd9hybje.css';
import '../../css/q/qk0gz3bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dnd9hybje"/><path class="qk0gz3bmb"/></g>`,
		"fallback": "andrsrxn:wifi-off",
	});
}

export default Component;
