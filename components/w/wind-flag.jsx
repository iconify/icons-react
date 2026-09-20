import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/q/qh44byr5t.css';
import '../../css/o/oo1-ggnod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="qh44byr5t"/><path class="oo1-ggnod"/></g>`,
		"fallback": "streamline-cyber:wind-flag",
	});
}

export default Component;
