import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tchscjb2b.css';
import '../../css/d/dsdoavb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tchscjb2b"/><path class="dsdoavb3t"/></g>`,
		"fallback": "tabler:zodiac-cancer",
	});
}

export default Component;
