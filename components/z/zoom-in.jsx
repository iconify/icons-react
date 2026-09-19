import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_8q9z4vg.css';
import '../../css/o/oof_74yzf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_8q9z4vg"/><path class="oof_74yzf"/>`,
		"fallback": "foundation:zoom-in",
	});
}

export default Component;
