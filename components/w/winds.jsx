import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfypxpbnr.css';
import '../../css/s/smmdwpb4s.css';
import '../../css/x/xstb4kblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kfypxpbnr"/><path class="smmdwpb4s"/><path class="xstb4kblq"/></g>`,
		"fallback": "mynaui:winds",
	});
}

export default Component;
