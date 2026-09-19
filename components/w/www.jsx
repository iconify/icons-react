import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b4ju2dkmd.css';
import '../../css/m/meben3t1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b4ju2dkmd"/><path class="meben3t1y"/></g>`,
		"fallback": "iconoir:www",
	});
}

export default Component;
