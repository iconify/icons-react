import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_v22nb2g.css';
import '../../css/l/l76gxh_pb.css';
import '../../css/h/hhomxsjts.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z_v22nb2g"/><path class="l76gxh_pb"/><path class="hhomxsjts"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-bowing",
	});
}

export default Component;
