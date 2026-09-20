import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1y07nbor.css';
import '../../css/g/gf8gg47ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n1y07nbor"/><path class="gf8gg47ae"/></g>`,
		"fallback": "tabler:world-minus",
	});
}

export default Component;
