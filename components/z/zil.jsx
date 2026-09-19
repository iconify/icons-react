import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/huutwhbwj.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vtcx3y0kx.css';
import '../../css/z/zarfnbe3g.css';
import '../../css/v/varsvhbkp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="huutwhbwj"/><g class="n1mjunbsu"><path class="vtcx3y0kx"/><path class="zarfnbe3g"/><path class="varsvhbkp"/></g></g>`,
		"fallback": "cryptocurrency-color:zil",
	});
}

export default Component;
