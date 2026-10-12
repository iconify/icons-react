import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffjwujvig.css';
import '../../css/t/t8gf8q6tr.css';
import '../../css/o/o5r41pbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ffjwujvig"/><path class="t8gf8q6tr"/><path class="o5r41pbxp"/></g>`,
		"fallback": "andrsrxn:zip",
	});
}

export default Component;
