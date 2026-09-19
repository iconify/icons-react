import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq44mglgu.css';
import '../../css/s/sobdcvb0f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq44mglgu weblate-plain-st0"/><path class="sobdcvb0f weblate-plain-st0"/>`,
		"fallback": "devicon-plain:weblate",
	});
}

export default Component;
