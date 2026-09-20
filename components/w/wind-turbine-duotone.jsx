import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ksspywt0b.css';
import '../../css/l/lsal2z6ms.css';
import '../../css/r/r07r6nw5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ksspywt0b"/><path class="lsal2z6ms"/><path class="r07r6nw5l"/></g>`,
		"fallback": "keyline-icons:wind-turbine-duotone",
	});
}

export default Component;
