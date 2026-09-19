import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gxdv0fb4f.css';
import '../../css/z/z-2xwqpol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gxdv0fb4f"/><path class="z-2xwqpol"/></g>`,
		"fallback": "hugeicons:weight-tilde",
	});
}

export default Component;
