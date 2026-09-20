import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/v0jsx44lg.css';
import '../../css/i/iz4x2ebmp.css';
import '../../css/x/xajwtxbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="v0jsx44lg"/><path class="iz4x2ebmp"/><path class="xajwtxbkl"/></g>`,
		"fallback": "streamline-logos:z-wave-logo",
	});
}

export default Component;
