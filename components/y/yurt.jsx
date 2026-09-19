import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jiaucbm6l.css';
import '../../css/d/dqcj_6b8q.css';
import '../../css/g/g49ywcb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jiaucbm6l"/><path class="dqcj_6b8q"/><path class="g49ywcb0a"/></g>`,
		"fallback": "hugeicons:yurt",
	});
}

export default Component;
