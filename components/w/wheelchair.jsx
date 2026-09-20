import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zpb8b-bew.css';
import '../../css/z/zv0dk6neh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zpb8b-bew"/><path class="zv0dk6neh"/></g>`,
		"fallback": "tabler:wheelchair",
	});
}

export default Component;
