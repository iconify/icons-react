import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/n11jugb8i.css';
import '../../css/a/anljp1e4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="n11jugb8i"/><path class="anljp1e4y"/></g>`,
		"fallback": "humbleicons:zoom-out",
	});
}

export default Component;
