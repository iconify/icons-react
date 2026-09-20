import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x4y7dp8ml.css';
import '../../css/n/n4lp0fgkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x4y7dp8ml"/><circle class="n4lp0fgkw"/></g>`,
		"fallback": "lucide:zodiac-leo",
	});
}

export default Component;
