import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/ztv38cnak.css';
import '../../css/i/i4p4l816w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ztv38cnak"/><path class="i4p4l816w"/></g>`,
		"fallback": "streamline-sharp-color:wrench",
	});
}

export default Component;
