import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5ncrxk5t.css';
import '../../css/b/b5750rzfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q5ncrxk5t"/><path class="b5750rzfx"/></g>`,
		"fallback": "hugeicons:workflow-circle-02",
	});
}

export default Component;
