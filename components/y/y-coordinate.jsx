import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo9z1gbgy.css';
import '../../css/e/ee4qnjb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bo9z1gbgy"/><path class="ee4qnjb0j"/></g>`,
		"fallback": "iconoir:y-coordinate",
	});
}

export default Component;
