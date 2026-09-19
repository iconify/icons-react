import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/secm1-tlc.css';
import '../../css/o/ozzrz2p5p.css';
import '../../css/v/v_3i9wmxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secm1-tlc"/><path class="ozzrz2p5p"/><path class="v_3i9wmxn"/>`,
		"fallback": "boxicons:windows",
	});
}

export default Component;
