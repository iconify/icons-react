import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lfnooqypl.css';
import '../../css/y/yirjvmx-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lfnooqypl"/><path class="yirjvmx-n"/></g>`,
		"fallback": "keyline-icons:zap-sharp-two-tone",
	});
}

export default Component;
