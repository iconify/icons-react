import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/g/gk2pz5bsp.css';
import '../../css/k/kzut7sbwt.css';
import '../../css/x/xedi886nl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="gk2pz5bsp"/><path class="kzut7sbwt"/><path clip-rule="evenodd" class="xedi886nl"/></g>`,
		"fallback": "fluent-emoji-flat:woozy-face",
	});
}

export default Component;
