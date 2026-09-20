import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_semibtt.css';
import '../../css/g/g_82qn13v.css';
import '../../css/m/mc4nh2bkz.css';
import '../../css/e/esan_6mzl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_semibtt"/><path class="g_82qn13v"/><path class="mc4nh2bkz"/><path class="esan_6mzl"/></g>`,
		"fallback": "streamline-color:wheelchair",
	});
}

export default Component;
