import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6fbg22te.css';
import '../../css/x/x7j_6sbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q6fbg22te"/><path class="x7j_6sbsv"/></g>`,
		"fallback": "mynaui:wink-ghost",
	});
}

export default Component;
