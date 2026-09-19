import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk6x0-gcj.css';
import '../../css/j/jw9a98ysj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk6x0-gcj"/><path class="jw9a98ysj"/>`,
		"fallback": "bxl:work-os",
	});
}

export default Component;
