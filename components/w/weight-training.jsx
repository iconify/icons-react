import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kcdvybbjr.css';
import '../../css/p/pledhbb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="kcdvybbjr"/><path class="pledhbb_l"/></g>`,
		"fallback": "streamline-cyber:weight-training",
	});
}

export default Component;
