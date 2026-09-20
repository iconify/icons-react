import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bos3_bcyf.css';
import '../../css/r/r2te244gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bos3_bcyf"/><path class="r2te244gm"/></g>`,
		"fallback": "tabler:zoom-question",
	});
}

export default Component;
