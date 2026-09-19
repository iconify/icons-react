import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofjs243ce.css';
import '../../css/h/ho71zpbvj.css';
import '../../css/i/idfn3mciq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofjs243ce"/><path class="ho71zpbvj"/><path class="idfn3mciq"/>`,
		"fallback": "famicons:wine-outline",
	});
}

export default Component;
