import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3zl9abjg.css';
import '../../css/e/ee25ukb3h.css';
import '../../css/c/chh9m8bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3zl9abjg"/><path class="ee25ukb3h"/><path class="chh9m8bfh"/></g>`,
		"fallback": "keyline-icons:wifi-medium-duotone",
	});
}

export default Component;
