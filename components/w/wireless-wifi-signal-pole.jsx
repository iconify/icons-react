import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/emswq_b0d.css';
import '../../css/o/o3s8st4ef.css';
import '../../css/y/yiijok71l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="emswq_b0d"/><path class="o3s8st4ef"/><path class="yiijok71l"/></g>`,
		"fallback": "streamline-freehand-color:wireless-wifi-signal-pole",
	});
}

export default Component;
