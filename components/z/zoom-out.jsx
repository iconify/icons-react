import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3r41qfxn.css';
import '../../css/s/str-f1rew.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3r41qfxn"/><path class="str-f1rew"/>`,
		"fallback": "foundation:zoom-out",
	});
}

export default Component;
