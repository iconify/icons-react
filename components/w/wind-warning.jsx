import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gayr1mb1f.css';
import '../../css/s/s5s05z0-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gayr1mb1f"/><path class="s5s05z0-i"/></g>`,
		"fallback": "andrsrxn:wind-warning",
	});
}

export default Component;
