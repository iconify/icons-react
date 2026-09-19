import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj2h69bvg.css';
import '../../css/x/x0l9201mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj2h69bvg"/><path class="x0l9201mw"/>`,
		"fallback": "bx:webcam",
	});
}

export default Component;
