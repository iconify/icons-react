import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fr2e1qcvy.css';
import '../../css/u/ueo_owbeo.css';
import '../../css/v/vac07x-bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="fr2e1qcvy wm-shadow"/><path class="ueo_owbeo wm-shadow"/><path class="vac07x-bt"/></g>`,
		"fallback": "withicons-brutal:wheat",
	});
}

export default Component;
