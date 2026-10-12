import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r6cnbey4s.css';
import '../../css/m/mr7yfcs-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r6cnbey4s"/><path class="mr7yfcs-a"/></g>`,
		"fallback": "andrsrxn:wifi-low",
	});
}

export default Component;
