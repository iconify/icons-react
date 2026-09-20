import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pc7nmb7bi.css';
import '../../css/n/n4th_vbly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="pc7nmb7bi"/><path class="n4th_vbly"/></g>`,
		"fallback": "streamline-plump:zoom-in-gesture",
	});
}

export default Component;
