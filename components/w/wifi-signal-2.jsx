import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bp8o4e48l.css';
import '../../css/a/aimb84bag.css';
import '../../css/p/pkzm03h6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bp8o4e48l"/><path class="aimb84bag"/><path class="pkzm03h6d"/></g>`,
		"fallback": "streamline-ultimate:wifi-signal-2",
	});
}

export default Component;
