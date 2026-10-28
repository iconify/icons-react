import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9l6nbc1k.css';
import '../../css/g/gd5nj5bhu.css';
import '../../css/h/hg3854btu.css';
import '../../css/y/yai-vccpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9l6nbc1k"/><rect class="gd5nj5bhu"/><rect class="hg3854btu"/><path class="yai-vccpy"/></g>`,
		"fallback": "andrsrxn:workflow-plus",
	});
}

export default Component;
