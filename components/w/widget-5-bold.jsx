import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yspjl-b4f.css';
import '../../css/o/ozjn960ga.css';
import '../../css/m/mucmghbzo.css';
import '../../css/z/zi-y_bbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yspjl-b4f"/><path class="ozjn960ga"/><path class="mucmghbzo"/><path class="zi-y_bbxk"/>`,
		"fallback": "solar:widget-5-bold",
	});
}

export default Component;
